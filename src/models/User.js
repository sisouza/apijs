const Sequelize = require("sequelize");
const db = require("../config/db.js");

const User = db.define("users", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,      
  },
  fullname: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
},{
  freezeTableName: false,
});
module.exports = User;





