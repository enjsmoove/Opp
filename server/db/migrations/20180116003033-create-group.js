module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      groupName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      planLevel: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      relatedAccountId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'accounts',
        },
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
    queryInterface.dropTable('groups', {
      truncate: true,
    }),
};
