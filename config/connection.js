// config/connection.js

const { Sequelize } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('db_app', 'root', 'Gidget123', {
  host: 'localhost',
  dialect: 'mysql',
});

console.log('test')

module.exports = sequelize;