module.exports = (sequelize, DataTypes) => {
  const skillSet = sequelize.define(
    'skillSet',
    {
      skillSetName: {
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
  return skillSet;
};
