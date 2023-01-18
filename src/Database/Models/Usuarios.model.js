module.exports = (sequelize, DataTypes) => {
    return sequelize.define('usuarios', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        identificacion: { type: DataTypes.STRING, allowNull: false },
        primer_nombre: { type: DataTypes.STRING, allowNull: false },
        segundo_nombre: { type: DataTypes.STRING, allowNull: false },
        primer_apellido: { type: DataTypes.STRING, allowNull: false },
        segundo_apellido: { type: DataTypes.STRING, allowNull: false },
        celular: { type: DataTypes.STRING, allowNull: false, unique: true },
        correo: { type: DataTypes.STRING, allowNull: false }
    });
};