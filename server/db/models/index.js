const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = 'development' || process.env.DEV_POSTGRES;
const config = require('../config/config.js');
const db = {};
// var seed = require('../seed')
const sequelize = new Sequelize(process.env.DEV_POSTGRES, config.production);

fs.readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js',
  )
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize
  .sync()
  .then(() => {
    console.log('done big fella');
  })
  .catch(err => {
    console.log(`failed big fella${err}`);
  });

module.exports = db;
