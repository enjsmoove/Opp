module.exports = (sequelize, DataTypes) => {
  const questionOrder = sequelize.define(
    'questionOrder',
    {
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      classMethods: {
        associate(models) {
          // associations can be defined here
          questionOrder.belongsTo(models.question);
        },
      },
    },
  );
  return questionOrder;
};
