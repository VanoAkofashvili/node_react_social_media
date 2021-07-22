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
        content: 'this is the first post',
        itemId: 1
      },
      {
        content: 'this is the second post',
        itemId: 2
      },
      {
        content: 'this is the third post',
        itemId: 3
      },
      {
        content: 'this is the fourth post',
        itemId: 4
      },
    ])

    await queryInterface.bulkInsert('photos', [
      {
        id: 1,
        postId: 1,
        path: 'images/7f651e58-9b1e-4108-9a6e-ea8e778c3c5f.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        postId: 2,
        path: 'images/15a7e380-602e-49b7-8b26-ad15ec685f8c.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        postId: 1,
        path: 'images/5fd0ca2d-e573-42ea-9402-264c541dff4f.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        postId: 1,
        path: 'images/9e3df341-e423-4c2a-a381-f3ae029efc4b.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        postId: 2,
        path: 'images/3c66d5c4-641f-4f88-8567-5d92b762b5d2.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("items", null, {});
    await queryInterface.bulkDelete("posts", null, {});
    await queryInterface.bulkDelete("photos", null, {});
  }
};
