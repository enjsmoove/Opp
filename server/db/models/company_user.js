module.exports = (sequelize, DataTypes) => {
  const companyUser = sequelize.define(
    'companyUser',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      smsNotificationActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      emailNotificationActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      classMethods: {
        associate(models) {
          // associations can be defined here
          companyUser.belongsTo(models.membership, { allowNull: false });
        },
      },
    },
  );
  return companyUser;
};
