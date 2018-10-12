module.exports = (sequelize, DataTypes) => {
  const industry = sequelize.define(
    'industry',
    {
      industryName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      classMethods: {
        associate(models) {
          // associations can be defined here
          industry.hasMany(models.businessStream, { allowNull: false });
        },
      },
    },
  );
  return industry;
};
