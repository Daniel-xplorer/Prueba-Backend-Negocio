const express = require('express');
const { db } = require('./Database/db');
const cors = require('cors');
const config = require('../config');

const { PORT } = config;

// get routes
const usuariosRoute = require('./Routes/Usuarios.routes');
const negociosRoute = require('./Routes/Negocios.routes');

// server initialization
const server = express();

// cors configuration
var corsOptions = {
    origin: function (origin, callback) {
        callback(null, true);
    },
    methods: 'GET,PUT,POST,DELETE',
    optionSuccessStatus: 200
};
server.use(cors(corsOptions));
server.use(express.json());

// routes
server.use('/usuarios', usuariosRoute);
server.use('/negocios', negociosRoute);
server.use('/', (req, res) => {
    res.status(404).json({ message: 'Not found' });
});

// server start
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    db.sync()
        .then(() => console.log('Database connected'))
        .catch(err => console.log(err));
});