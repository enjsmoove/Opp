require('dotenv').config();
module.exports = {
  development: {
    url: process.env.DEV_POSTGRES,
    dialect: 'postgres',
  },
  production: {
    url: process.env.DEV_POSTGRES,
    dialect: 'postgres',
  },
};
