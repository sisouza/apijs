const Sequelize = require("sequelize");
const db = require("../config/db.js");

const Genre = db.define("genres", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,      
  },
  name: Sequelize.STRING,
},{
  freezeTableName: false,
});
module.exports = Genre;





