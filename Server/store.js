const Problem = require('./models/Problem');
const TestProblem = require('./models/TestProblem');
const Test = require('./models/Test');
//const Attempt = require('./models/Attempt');


async function addNewProblem(problem) {

  try {
      const res = await Problem.query().insert({
        problemName: problem.problemName,
        description: problem.description,
        problemTests: problem.problemTests,
        difficultyLevel: problem.difficultyLevel,
        email: problem.email
      }).debug();

      return {
        success: true,
        message: 'Problem Added Successfully',
        Problems: getAllProblems()
      };
    } catch (error) { console.log(error); }

}

async function createNewTest(test) {

  try{
      const res = await Test.query().insert({
        testName: test.testName,
        difficultyLevel: test.difficultyLevel,
        email: test.email
      });
    }catch(error){
      console.log(error);
    }
}

async function problemReducer(prob) {

  return {
    id: prob.id,
    problemName :prob.problemName,
    description: prob.description,
    testCases: prob.problemTests,
    difficultyLevel: prob.difficultyLevel,
    createdAt: prob.createdAt,
    email: prob.email
  };
}

async function testReducer(test) {


  const problem = await Problem.query()
                       .where('id' ,'IN',
                       TestProblem.query().select('p_id').where('t_id',test.id));
  console.log(problem);
  console.log(test.id);
  console.log(problem.map((prob) => {return problemReducer(prob);}));
  return {
    id: test.id,
    testName: test.testName,
    difficultyLevel: test.difficultyLevel,
    email : test.email,
    createdAt: test.createdAt,
    problems: problem.map((prob) => {return problemReducer(prob);})
  };
}

async function getAllProblems() {
  const res =  await Problem.query();
  return res.map((problem) => {
       console.log(problemReducer(problem));
    return problemReducer(problem);
  }); 
  //console.log(res);
}

//getAllProblems();

async function getProblemById(id) {
  const res =  await Problem.query().findById(id);
  console.log(res);
  return problemReducer(res.rows[0]);
}

async function getAllTests() {
  const res = await Test.query();
     return res.map((test) => {
       console.log(testReducer(test));
           return testReducer(test);
    });
    //console.log(res);
}
//getAllTests();

async function getTestByAuthor(email) {
  const res = await Test.query().where('email',email);
  return res.rows.map((test) => {
    return testReducer(test);
  });
}

async function getProblemsByAuthor(email) {
  const res = await Problem.query().where('email',email);
  return res.rows.map((test) => {
    return problemReducer(test);
  });
}

module.exports = {
  getAllProblems,
  getProblemById,
  getAllTests,
  getTestByAuthor,
  getProblemsByAuthor,
  addNewProblem,
  createNewTest
};
