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
        password: 'vano1234',
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
