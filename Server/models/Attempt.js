const Model = require('./config.js');

const { BaseModel } = require('./BaseModel');

class Attempt extends BaseModel {
    static get tableName () {
      return 'attempts'
    }

   static get relationMappings () {
      //  const User = require('./User');
      //  const Test = require('./Test');

        return {
          user: {
            relation: Model.BelongsToOneRelation,
            modelClass: 'User',
            join: {
              from: 'attempts.u_id',
              to: 'users.id'
            }
          },

          test: {
            relation: Model.BelongsToOneRelation,
            modelClass: 'Test',
            join: {
              from: 'attempts.t_id',
              to: 'tests.id'
            }
          }
        }
      }


      static get jsonSchema() {
          
        return {
           type : 'object',
  
           properties : {
             id :{type :'integer'},
             attemptTime : {type :'timestamp'},
             u_id : {type:'integer'},
             t_id : {type:'integer'},
             solutions: {type : 'json'}
           }
  
        };
      }
  }

  module.exports = Attempt;