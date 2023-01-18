const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('sequelize');
const config = require('../../config.js');

// Models
const modeloNegocios = require('./Models/Negocios.model');
const modeloUsuarios = require('./Models/Usuarios.model');

// environment variables
const {
    DB_USER,
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_CONNECTION,
    DB_PASSWORD
} = config;

// Create database and configuration
const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_CONNECTION,
    logging: false
});

// Models initialization with sequelize
modeloNegocios(db, DataTypes); // corregir si esta mal el datatypes
modeloUsuarios(db, DataTypes);

const { negocios, usuarios } = db.models;

// relations between models
negocios.belongsToMany(usuarios, { through: 'Usuarios_negocios' });
usuarios.belongsToMany(negocios, { through: 'Usuarios_negocios' });


module.exports = {
    ...db.models,
    db
};