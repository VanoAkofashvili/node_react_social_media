'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('photos', [
      {
        path: '/images/photos.png',
        createdAt: new Date(),
        updatedAt: new Date(),
        id: 1,
      }
    ])
    await queryInterface.bulkInsert('users', [
      {
        firstName: 'vaniko',
        lastName: 'akopashvili',
        email: 'vanikoakofa@gmail.com',
        password: '$2y$12$fBQ3VlLzuWmXL8zC1iFpb.0x340bGqKLn9YWh4rITAIAm3PtEXgYa',
        age: 19,
        dateOfBirth: new Date('11-11-2001'),
        sex: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        profileId: 1
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('photos', null, {});
    await queryInterface.bulkDelete("users", null, {});
  }
};
