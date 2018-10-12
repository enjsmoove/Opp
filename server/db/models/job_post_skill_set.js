module.exports = (sequelize, DataTypes) => {
  const jobPostSkillSet = sequelize.define(
    'jobPostSkillSet',
    {},
    {
      classMethods: {
        associate(models) {
          // associations can be defined here
          jobPostSkillSet.belongsTo(models.skillSet, { allowNull: false });
          // jobPostSkillSet.belongsTo(models.jobPost)
        },
      },
    },
  );
  return jobPostSkillSet;
};
