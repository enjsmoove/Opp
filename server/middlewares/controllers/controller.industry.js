const { industry } = require('../../db/models/index');
// var models = require('../../db/migrations')
//
// // const JobPost = require('../../db/models/jobPost').JobPost
exports.getIndustryList = (req, res) => {
  industry.findAll().then(data => {
    // console.log(data)
    res.send(data.map(ind => ind.industryName));
  });
};
exports.addIndustry = (req, res) => {
  const newIndustry = industry.build({
    industryName: 'Math',
  });
  newIndustry.save().then(() => {
    res.send('added');
  });
};
