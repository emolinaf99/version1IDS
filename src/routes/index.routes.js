const {Router} = require("express");
const router = Router();
const controller = require('../controllers/indexController')

router.get("/", controller.vistaIngresar);
router.get("/piezasInspeccion", controller.formularioCrearPiezaInspeccion);
router.get("/formInspeccion", controller.crearInspeccion);
router.get("/consultaInspecciones", controller.vistaConsulta);
router.get("/consultaOtsTQC", controller.ConsultaOtsTQC);
router.get("/consultaOtsInternas", controller.ConsultaOtsInternas);
router.get("/consultaAccidentes", controller.ConsultaAccidentes);
router.get("/formOtInterna", controller.formularioCrearOtInterna);
router.get("/inspeccion", controller.detalleInspeccion);
router.get("/accidentesContenedores", controller.ingresarAccidentesContenedores);
router.get("/consultaCotizaciones", controller.vistaCotizaciones);
router.get("/funcionesRol", controller.funcionesRolVista);
router.get("/OT-TQC", controller.detalleOtTQC);
router.get("/OT-Interna", controller.detalleOtInterna);
router.get("/accidenteContenedor", controller.detalleAccidenteContenedor);
router.get("/cotizacion", controller.detalleCotizacion);
router.get("/PEI", controller.detallePEI);


module.exports = router;