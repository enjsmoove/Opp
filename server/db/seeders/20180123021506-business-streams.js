module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'businessStreams',
      [
        {
          businessStreamName: 'Music Production',
          industryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          businessStreamName: 'Audio Engineering',
          industryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('businessStreams', null, {}),
};
