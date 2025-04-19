const Router = require("express");
const router = new Router();
const typeConroller = require("../controllers/typeController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), typeConroller.create);
router.get("/", typeConroller.getAll);

module.exports = router;
