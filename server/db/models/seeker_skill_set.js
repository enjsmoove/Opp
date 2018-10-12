module.exports = (sequelize, DataTypes) => {
  const seekerSkillSet = sequelize.define(
    'seekerSkillSet',
    {},
    {
      classMethods: {
        associate(models) {
          // associations can be defined here
          seekerSkillSet.belongsTo(models.seekerUser, { allowNull: false });
          seekerSkillSet.belongsTo(models.skillSet, { allowNull: false });
        },
      },
    },
  );
  return seekerSkillSet;
};
