module.exports = {
  up: (queryInterface, Sequelize) =>
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    queryInterface.bulkInsert(
      'questionTypes',
      [
        {
          id: 1,
          questionTypeName: 'Video Timed',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    ),
  down: (queryInterface, Sequelize) =>
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    queryInterface.bulkDelete('questionTypes', null, {}),
};
