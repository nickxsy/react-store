const { Sequelize } = require("sequelize"); // Была опечатка: Sequilize -> Sequelize

// Экспортируем инстанс Sequelize
module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT), // безопаснее привести к числу
  }
);
