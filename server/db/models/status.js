module.exports = (sequelize, DataTypes) => {
  const status = sequelize.define(
    'status',
    {
      statusName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      classMethods: {
        associate(models) {
          // associations can be defined here
        },
      },
    },
  );
  return status;
};
