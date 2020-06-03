const Sequelize = require('sequelize');

const connection = new Sequelize(
    'sql2345282', //Database
    'sql2345282', //Username
    'bH5*pS1%', //Password
    {
        dialect: 'mysql',
        host: 'sql2.freemysqlhosting.net'
    }
);

module.exports = connection;