module.exports = (sequelize, DataTypes) => {
    return sequelize.define('negocios', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        nombre: { type: DataTypes.STRING, allowNull: false },
        direccion: { type: DataTypes.STRING, allowNull: false },
        celular: { type: DataTypes.STRING, allowNull: false },
        correo: { type: DataTypes.STRING, allowNull: false }
    });
};