//IMPORT EXTERNAL LIBS
const Sequelize = require('sequelize');
//IMPORT DATABASE CONNECTION
const connectionController = require('../utils/connection');

const Account = connectionController.define('account', {
    id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    first_name : { type: Sequelize.STRING, allowNull: false },
    last_name : { type: Sequelize.STRING, allowNull: false },
    email : { type: Sequelize.STRING, allowNull: false },
    password : { type: Sequelize.STRING, allowNull: false },
    isApproved : { type: Sequelize.BOOLEAN, allowNull: false }, //Students project
    isLocked : { type: Sequelize.BOOLEAN, allowNull: false } //Students project
});

module.exports = Account;