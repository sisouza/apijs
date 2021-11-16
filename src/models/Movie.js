const Sequelize = require("sequelize");
const db = require("../config/db.js");


const Movie = db.define("movies", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,      
  },
  name: Sequelize.STRING,
  sinopse: Sequelize.TEXT,
  year: Sequelize.INTEGER,
  poster: Sequelize.STRING,
  box_office: Sequelize.DECIMAL(10, 2),
  genreId: {
    type: Sequelize.UUID,
    references: {
      model: 'genres', 
      key: 'id', 
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
},{
  freezeTableName: false,
});

module.exports = Movie;





