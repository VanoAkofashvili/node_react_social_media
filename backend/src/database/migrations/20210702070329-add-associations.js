'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // item(posts, photos) belongsTo User
    return queryInterface.addColumn("items", "userId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
      .then(() => {
        // Item hasOne Post
        return queryInterface.addColumn('posts', 'itemId', {
          type: Sequelize.INTEGER,
          allowNull: false,
          // primaryKey: true,
          references: {
            model: 'items',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        })
      })
      .then(() => {
        return queryInterface.addColumn('users', 'coverId', {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'covers',
            key: 'id',
          },
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE'
        })
      })
  },

  down: async (queryInterface, Sequelize) => {
    // remove Item belongs to User
    return queryInterface.removeColumn(
      "items",
      'userId'
    )
      .then(() => {
        // remove Item hasOne Post
        return queryInterface.removeColumn(
          'posts',
          'itemId'
        )
      })
      .then(() => {
        return queryInterface.removeColumn('users', 'coverId');
      })
  }
};
