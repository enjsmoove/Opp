module.exports = (sequelize, DataTypes) => {
  const questionType = sequelize.define(
    'questionType',
    {
      questionTypeName: {
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
  return questionType;
};
