'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('photos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      path: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable(
      'user_photo',
      {
        userId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        postId: {
          type: Sequelize.INTEGER,
          primaryKey: true
        }
      }
    )

    await queryInterface.addColumn('users', 'profileId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      // primaryKey: true,
      references: {
        model: 'photos',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'profileId');
    await queryInterface.dropTable('photos');
    await queryInterface.dropTable('user_photo');
  }
};