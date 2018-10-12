module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('skillSets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      skillSetName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('skillSets', {
      force: true,
      cascade: true,
    }),
};
