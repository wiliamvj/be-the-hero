const knex = require('knex');
const configuration = require('../../knexfile');

const connectioon = knex(configuration.development);

module.exports = connectioon;