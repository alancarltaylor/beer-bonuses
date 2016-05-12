// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  },

//CMD + shift + D = copy/paste

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  },


};
