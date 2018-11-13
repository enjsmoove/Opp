const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const accountRouter = require('./routers/route.account');
const businessStreamRouter = require('./routers/route.businessStream');
const industryRouter = require('./routers/route.industry');
const interviewRouter = require('./routers/route.interview');
const jobpostRouter = require('./routers/route.jobpost');
// const loginRouter = require('./routers/route.login')
const membershipRouter = require('./routers/route.membership');

function createWebpackMiddleware(compiler, publicPath) {
  return webpackDevMiddleware(compiler, {
    logLevel: 'warn',
    publicPath,
    silent: true,
    stats: 'errors-only',
  });
}

module.exports = function addDevMiddlewares(app, webpackConfig) {
  const compiler = webpack(webpackConfig);
  const middleware = createWebpackMiddleware(
    compiler,
    webpackConfig.output.publicPath,
  );

  app.use(middleware);
  app.use(
    accountRouter,
    businessStreamRouter,
    industryRouter,
    interviewRouter,
    jobpostRouter,
    membershipRouter,
  );
  app.use(webpackHotMiddleware(compiler));

  // Since webpackDevMiddleware uses memory-fs internally to store build
  // artifacts, we use it instead
  const fs = middleware.fileSystem;

  app.get('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });
};
