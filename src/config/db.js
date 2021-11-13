require("dotenv").config()
const Sequelize = require('sequelize');
const { DB_HOST, DB_USER, DB_PASSWORD, DATABASE} = process.env;

const dbconnection = new Sequelize({ dialect: 'postgres', host:DB_HOST, username: DB_USER, password: DB_PASSWORD, database: DATABASE });

try {
 const connected = dbconnection.authenticate();
  console.log('Connected to database');
} catch (error) {
  console.error('Error to connect to the database:', error);
}

module.exports = dbconnection;