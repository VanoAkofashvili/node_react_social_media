'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        firstName: 'vaniko',
        lastName: 'akopashvili',
        email: 'vanikoakofa@gmail.com',
        password: '$2b$12$9wjxcD3CckIpabg8cZ4sPOYTYPnULdYI7.RPfz9SZoXL6Rv6JEM7G',
        dateOfBirth: new Date('11-11-2001'),
        sex: 'M',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        firstName: 'shota',
        lastName: 'archemashvili',
        email: 'shotaarchema@gmail.com',
        password: '$2b$12$sHTSvE0vZK3Nmb2faTUqT.zvKSB/v3KMbDdwjmHZpn8bXNZwtXwWC',
        dateOfBirth: new Date('11-11-1998'),
        sex: 'M',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkDelete('photos', null, {});
    return queryInterface.bulkDelete("users", null, {});
  }
};
