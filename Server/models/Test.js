const Model = require('./config.js');

const BaseModel = require('./BaseModel');

class Test extends BaseModel {
    static get tableName () {
      return 'tests'
    }

      static get relationMappings () {

        return {
            attempt: {
                relation: Model.HasManyRelation,
                modelClass: 'Attempt',
                join: {
                  from: 'tests.id',
                  to: 'attempts.t_id'
                }
              },

              problem: {
                relation: Model.ManyToManyRelation,
                modelClass: 'Problem',
                join: {
                    from: 'tests.id',
                    through: {
                      from: 'testProblems.t_id',
                      to: 'testProblems.p_id.'
                      },
                    to: 'problems.id'
                  }
              },

              testProblem: {
                relation: Model.HasManyRelation,
                modelClass: 'TestProblem',
                join: {
                  from: 'tests.id',
                  to: 'testProblems.t_id'
                }
              }
        }
      }


    static get jsonSchema() {
          
        return {
           type : 'object',
  
           properties : {
             id :{type :'integer'},
             testName : {type :'string'},
             difficultyLevel : {type:['string','null']},
             createdAt : {type:'timestamp'},
             email:    {type : 'string'}
           }
  
        };
      }
  }
  module.exports = Test;