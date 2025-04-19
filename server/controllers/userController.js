const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

function generateJwt(id, email, role) {
  return jwt.sign({ id, email, role }, JWT_SECRET_KEY, {
    expiresIn: "24h",
  });
}

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;

    if (!email || !password) {
      return next(ApiError.badRequest("Некорректные данные"));
    }

    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      return next(
        ApiError.badRequest("Пользователь с таким email уже существует")
      );
    }

    const hashPassword = await bcrypt.hash(password, 5);

    const user = await User.create({ email, role, password: hashPassword });

    const basket = await Basket.create({ userId: user.id });

    const token = generateJwt(user.id, email, user.role);

    return res.json({ token });
  }

  async login(req, res, next) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return next(ApiError.internal("Пользователь не найден"));
    }

    const comparePassword = bcrypt.compareSync(password, user.password);

    if (!comparePassword) {
      return next(ApiError.internal("Указан неверный пароль"));
    }

    const token = generateJwt(user.id, email, user.role);
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.email, req.user.role);

    return res.json({ token });
  }
}

module.exports = new UserController();
