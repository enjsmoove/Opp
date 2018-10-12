module.exports = (sequelize, DataTypes) => {
  const companyImage = sequelize.define(
    'companyImage',
    {
      companyImage: {
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
  return companyImage;
};
