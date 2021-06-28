'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // item(posts, photos) belongsTo User
    return queryInterface.addColumn("items", "userId", {
      type: Sequelize.INTEGER,
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
          primaryKey: true,
          references: {
            model: 'items',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        })
      })
      .then(() => {
        // Item hasOne Photo
        return queryInterface.addColumn('photos', 'itemId', {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'items',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        })
      })
    // .then(() => {
    //   // User hasMany Item
    //   return queryInterface.addColumn(
    //     'items',
    //     'userId',
    //     {
    //       type: Sequelize.INTEGER,
    //       references: {
    //         model: 'users',
    //         key: 'id',
    //       },
    //       onDelete: 'CASCADE',
    //       onUpdate: 'CASCADE'
    //     }
    //   )
    //
    // })
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
        // remove Item hasOne Photo
        return queryInterface.removeColumn(
          'photos',
          'itemId'
        )
      })
    // .then(() => {
    //   // remove User hasMany Item
    //   return queryInterface.removeColumn(
    //     'items',
    //     'userId'
    //   )
    // })
  }
};
