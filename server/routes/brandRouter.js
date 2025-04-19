const Router = require("express");
const router = new Router();
const brandConroller = require("../controllers/brandController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), brandConroller.create);
router.get("/", brandConroller.getAll);

module.exports = router;
