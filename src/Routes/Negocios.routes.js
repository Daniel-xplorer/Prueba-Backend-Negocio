const { crearNegocio, listarNegocios, eliminarNegocio } = require('../Controllers/Negocios.controller');
const verifyToken = require('../Config/verifyToken');

const router = require('express').Router();

router.post('/CrearNegocio', verifyToken, crearNegocio);
router.get('/ListarNegocios', verifyToken, listarNegocios);
router.delete('/EliminarNegocio/:id', verifyToken, eliminarNegocio);

module.exports = router;