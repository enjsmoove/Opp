const Router = require('express').Router();
const jobController = require('../controllers/controller.jobpost');

// Router.get('/job/:jobId', jobController.getJob);

Router.get('/job/:industryId', jobController.getJobsByIndustry);

Router.get('/account/:accountId/jobs/', jobController.getAccountJobs);

module.exports = Router;
