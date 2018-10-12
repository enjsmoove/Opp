module.exports = (sequelize, DataTypes) => {
  const businessStream = sequelize.define(
    'businessStream',
    {
      businessStreamName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      classMethods: {
        associate(models) {
          // associations can be defined here
          businessStream.belongsTo(models.industry, { allowNull: false });
        },
      },
    },
  );
  return businessStream;
};
