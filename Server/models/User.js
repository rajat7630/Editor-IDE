const Model = require('./config.js');

const { BaseModel } = require('./BaseModel');

class User extends BaseModel {
    static get tableName () {
      return 'users'
    }


    static get relationMappings () {
        // const Attempt = require('./Attempt');

        return {
          attempt: {
            relation: Model.HasManyRelation,
            modelClass: 'Attempt',
            join: {
              from: 'users.id',
              to: 'attempts.u_id'
            }
          }
        }
      }


    static get jsonSchema() {
          
        return {
           type : 'object',

           properties : {
             id :{type :'integer'},
             email : {type :'string'},
             name : {type:'string'},
             collegeName : {type:['string','null']}
           }

        };
      }
  }

  module.exports = User;