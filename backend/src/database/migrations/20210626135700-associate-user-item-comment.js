'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // User belongsToMany Item
    return queryInterface.createTable(
      'items_comments',
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
        comment: {
          type: Sequelize.TEXT,
          allowNull: false,
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
    return queryInterface.dropTable('items_comments');
  }
};
