const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')

const knexConnection = Knex(connection)

Model.knex(knexConnection)


class User extends Model {
    static get tableName () {
      return 'user'
    }

    static get idColumn() {
        return 'u_id';
      }


      static get relationMappings () {
        return {
          attempts: {
            relation: Model.HasManyRelation,
            modelClass: attempts,
            join: {
              from: 'user.u_id',
              to: 'attempts.u_id'
            }
          }
        }
      }
  }


  class Admin extends Model {
    static get tableName () {
      return 'admin'
    }

    static get idColumn() {
        return 'a_id';
      }


      static get relationMappings () {
        return {
          problems: {
            relation: Model.HasManyRelation,
            modelClass: problems,
            join: {
              from: 'admin.a_id',
              to: 'problems.a_id'
            }
          },

          tests: {
            relation: Model.HasManyRelation,
            modelClass: tests,
            join: {
              from: 'admin.a_id',
              to: 'tests.a_id'
            }
          }
        }
      }
  }



  class Problems extends Model {
    static get tableName () {
      return 'problems'
    }

    static get idColumn() {
        return 'p_id';
      }


      static get relationMappings () {
        return {
          admin: {
            relation: Model.BelongsToOneRelation,
            modelClass: admin,
            join: {
              from: 'problems.a_id',
              to: 'admin.a_id'
            }
          }
        }
      }
  }



  class Tests extends Model {
    static get tableName () {
      return 'tests'
    }

    static get idColumn() {
        return 't_id';
      }


      static get relationMappings () {
        return {
          admin: {
            relation: Model.BelongsToOneRelation,
            modelClass: admin,
            join: {
              from: 'tests.a_id',
              to: 'admin.a_id'
            }
          }
        }
      }
  }


  class Attempts extends Model {
    static get tableName () {
      return 'attempts'
    }

    static get idColumn() {
        return 'at_id';
      }


      static get relationMappings () {
        return {
          user: {
            relation: Model.BelongsToOneRelation,
            modelClass: user,
            join: {
              from: 'attempts.u_id',
              to: 'user.u_id'
            }
          },

          tests: {
            relation: Model.BelongsToOneRelation,
            modelClass: tests,
            join: {
              from: 'attempts.t_id',
              to: 'tests.t_id'
            }
          }
        }
      }
  }

  module.exports = { User, Admin, Tests, Problems,Attempts }
