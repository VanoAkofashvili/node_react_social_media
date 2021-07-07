'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        firstName: 'vaniko',
        lastName: 'akopashvili',
        email: 'vanikoakofa@gmail.com',
        password: '$2y$12$fBQ3VlLzuWmXL8zC1iFpb.0x340bGqKLn9YWh4rITAIAm3PtEXgYa',
        age: 19,
        dateOfBirth: new Date('11-11-2001'),
        sex: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        profileId: null,
        coverId: null,
      },
      {
        id: 2,
        firstName: 'shota',
        lastName: 'archemashvili',
        email: 'shotaarchema@gmail.com',
        password: '$2y$12$fBQ3VlLzuWmXL8zC1iFpb.0x340bGqKLn9YWh4rITAIAm3PtEXgYa',
        age: 19,
        dateOfBirth: new Date('11-11-1998'),
        sex: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        profileId: null,
        coverId: null,
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkDelete('photos', null, {});
    return queryInterface.bulkDelete("users", null, {});
  }
};
