const { Sequelize } = require('sequelize');
const config = require('./config').development;
const sequelize = new Sequelize(config);
module.exports = sequelize;
