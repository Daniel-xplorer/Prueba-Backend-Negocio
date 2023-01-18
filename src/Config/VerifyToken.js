const jwt = require('jsonwebtoken');
const config = require('../../config.js');
const { usuarios } = require('../Database/db.js');

const {
    JWT_SECRET
} = config;

const verifyToken = async (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (!token) { return res.status(403).json({ message: 'No token provided' }); };
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await usuarios.findOne({ where: { id: decoded.id } });
        if (!user) { return res.status(404).json({ message: 'No user found' }); };
        req.usuario = user;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    };
};

module.exports = verifyToken;