module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define(
    'message',
    {
      bodyText: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subjectName: {
        type: DataTypes.STRING,
      },
    },
    {
      classMethods: {
        associate(models) {
          // associations can be defined here
          message.belongsTo(models.jobPost);
        },
      },
    },
  );
  return message;
};
