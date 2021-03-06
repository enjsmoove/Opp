const { jobPost, account } = require('../../db/models/index');

exports.getAccountJobs = (req, res) => {
  account
    .find({
      id: req.params.accountId,
    })
    .then(acc => {
      acc.getJobPosts().then(data => {
        res.send(data);
      });
    });
};
exports.getJob = (req, res) => {
  jobPost
    .find({
      id: req.params.jobId,
    })
    .then(job => {
      res.send(job);
    });
};

exports.getJobsByIndustry = (req, res) => {
  jobPost
    .find({
      where: {
        industryId: req.params.industryId,
      },
      include: [
        {
          model: account,
          required: true,
        },
      ],
    })
    .then(jobs => {
      if (jobs) res.send([jobs]);
      else res.send([]);
    });
};
