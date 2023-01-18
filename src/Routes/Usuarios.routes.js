const { crearUsuario, autenticarUsuario } = require('../Controllers/Usuarios.controller');

const router = require('express').Router();

router.post('/CrearUsuario', crearUsuario)
router.get('/AutenticarUsuario', autenticarUsuario)

module.exports = router;