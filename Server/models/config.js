const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')

const knexConnection = Knex(connection.development);
Model.knex(knexConnection);

module.exports = Model;