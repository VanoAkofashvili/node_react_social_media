'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('items', [
      {
        id: 1,
        itemType: 'Post',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },
      {
        id: 2,
        itemType: 'Post',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },
      {
        id: 3,
        itemType: 'Post',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2
      },
      {
        id: 4,
        itemType: 'Post',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2
      },
    ])
    await queryInterface.bulkInsert('posts', [
      {
        id: 1,
        content: 'this is the first post',
        itemId: 1
      },
      {
        id: 2,
        content: 'this is the second post',
        itemId: 2
      },
      {
        id: 3,
        content: 'this is the third post',
        itemId: 3
      },
      {
        id: 4,
        content: 'this is the fourth post',
        itemId: 4
      },
    ])

    await queryInterface.bulkInsert('photos', [
      {
        id: 1,
        path: 'images/first.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 2,
        path: 'images/second.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 3,
        path: 'images/third.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 4,
        path: 'images/fourth.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])

    await queryInterface.bulkInsert('user_photos', [
      {
        photoId: 1,
        postId: 1,
      }, {
        photoId: 2,
        postId: 2,
      }, {
        photoId: 3,
        postId: 3,
      }, {
        photoId: 4,
        postId: 4,
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("items", null, {});
    await queryInterface.bulkDelete("posts", null, {});
    await queryInterface.bulkDelete("photos", null, {});
    await queryInterface.bulkDelete("user_photos", null, {});
  }
};
