'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.createTable("movies", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sinopse: {
        allowNull: false,
        type: Sequelize.TEXT,
        unique: true,
       },
      year: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      poster: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      box_office: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2),
       },
      genreId: {
        type: Sequelize.UUID,
        references: {
          model: 'genres', 
          key: 'id', 
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('movies');
  }
};
