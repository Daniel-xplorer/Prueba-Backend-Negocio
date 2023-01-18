module.exports = { 
    PORT: process.env.PORT || 3001,
    DB_HOST: process.env.DB_HOST || '127.0.0.1',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || 'xennial',
    DB_NAME: process.env.DB_NAME || 'negocios',
    DB_PORT: process.env.DB_PORT || 3306,
    DB_CONNECTION: process.env.DB_CONNECTION || 'mysql',
    DB_LOGGING: process.env.DB_LOGGING || false,
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
};