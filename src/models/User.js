const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;
const db = require("../config/db.js");

const User = db.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING
},{
  freezeTableName: true
});
 
module.exports = new User;





