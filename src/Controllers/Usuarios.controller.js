const { usuarios } = require('../Database/db.js');
const config = require('../../config.js');
const jwt = require('jsonwebtoken');

const {
    JWT_SECRET
} = config;

const crearUsuario = async (req, res) => {
    const {
        identificacion,
        primer_nombre,
        segundo_nombre,
        primer_apellido,
        segundo_apellido,
        celular,
        correo
    } = req.body;
    try {
        let user;
        user = await usuarios.findOne({
            where: {
                primer_nombre,
                primer_apellido,
                identificacion
            }
        });
        if (user) { return res.status(400).json({ message: 'El usuario ya existe' }); };
        user = await usuarios.create({
            identificacion,
            primer_nombre,
            segundo_nombre,
            primer_apellido,
            segundo_apellido,
            celular,
            correo
        });
        res.status(200).json({ message: 'Usuario creado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error });
    };
};

const autenticarUsuario = async (req, res) => {
    const { primer_nombre, identificacion } = req.body;
    try {
        let user;
        user = await usuarios.findOne({
            where: {
                primer_nombre,
                identificacion
            }
        });
        if (!user) { return res.status(400).json({ message: 'Usuario Invalido' }); };
        const negocioByUser = await user.getNegocios();
        const dataUser = {
            id: user.id,
            identificacion: user.identificacion,
            primer_nombre: user.primer_nombre,
            segundo_apellido: user.segundo_apellido
        };
        const token = jwt.sign(dataUser, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token, negocios: negocioByUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al autenticar el usuario', error });
    };
};

module.exports = {
    crearUsuario,
    autenticarUsuario
};