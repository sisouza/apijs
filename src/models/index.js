const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/database.js');

const db = {};
const sequelize = new Sequelize(config);

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.movie = require("../models/User")(sequelize, Sequelize);
db.genre = require("../models/Genre")(sequelize, Sequelize);
db.movie = require("../models/Movie")(sequelize, Sequelize);

db.genre.belongsToMany(db.movie, {
  through: "genreId",
  as: "genre",
  foreignKey: "genreId",
});

db.movie.belongsTo(db.genre, {
  through: "genreId",
  as: "genre",
  foreignKey: "genreId",
});

module.exports = db;