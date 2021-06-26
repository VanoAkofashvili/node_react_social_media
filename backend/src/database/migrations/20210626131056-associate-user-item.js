'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // User belongsToMany Item
    return queryInterface.createTable(
      'liked_items',
      {
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        userId: {
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        itemId: {
          type: Sequelize.INTEGER,
          primaryKey: true
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    // remove liked_items table
    return queryInterface.dropTable('liked_items');
  }
};
