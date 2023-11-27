const {Router} = require("express");
const router = Router();
const controller = require('../controllers/usersController')

router.get("/perfil", controller.perfil);
router.get("/cambioContrasena", controller.cambioContrasenaVista);

module.exports = router;