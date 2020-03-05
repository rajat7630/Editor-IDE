const Model = require('./config.js');

const BaseModel = require('./BaseModel');

class TestProblem extends BaseModel {

    static get tableName () {
      return 'testProblems'
    }

      static get relationMappings () {

        // const Test = require('./Test');
        // const Problem = require('./Problem');

        return {
          test: {
            relation: Model.BelongsToOneRelation,
            modelClass: 'Test',
            join: {
              from: 'testProblems.t_id',
              to: 'tests.id'
            }
          },

          problem: {
            relation: Model.BelongsToOneRelation,
            modelClass: 'Problem',
            join: {
              from: 'testProblems.p_id',
              to: 'Problems.id'
            }
          }
        }
      }

      static get jsonSchema() {
          
        return {
           type : 'object',
  
           properties : {
             id :{type :'integer'},
             t_id : {type :'integer'},
             p_id : {type:'integer'}
           }
  
        };
      }
  }


  

  module.exports = TestProblem;