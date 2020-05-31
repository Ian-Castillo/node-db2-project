const knex = require('knex');
const config = require('../knexfile.js');

const db = knex(config.development);
// knex expects a config object
module.exports = db;