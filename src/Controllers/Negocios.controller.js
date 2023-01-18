const { negocios, usuarios } = require('../Database/db.js');


const crearNegocio = async (req, res) => {
    const {
        nombre,
        direccion,
        celular,
        correo
    } = req.body;
    try {
        let negocio;
        negocio = await negocios.findOne({
            where: {
                nombre,
                direccion,
                celular,
                correo
            }
        });
        if (negocio) { return res.status(400).json({ message: 'El negocio ya existe' }); };
        negocio = await negocios.create({
            nombre,
            direccion,
            celular,
            correo
        });
        negocio.addUsuarios(req.usuario.id);
        res.status(200).json({ message: 'Negocio creado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al crear el negocio', error });
    };
};

const listarNegocios = async (req, res) => {
    const { id } = req.usuario;
    try {
        const negociosByUser = await negocios.findAll({
            include: [{
                model: usuarios,
                where: { id }
            }]
        })
        res.status(200).json({ negocios: negociosByUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al listar los negocios', error });
    };
};

const eliminarNegocio = async (req, res) => {
    const { id } = req.params;
    try {
        await negocios.destroy({
            where: { id }
        });
        res.status(200).json({ message: 'Negocio eliminado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al eliminar el negocio', error });
    };
};

module.exports = {
    crearNegocio,
    listarNegocios,
    eliminarNegocio
};