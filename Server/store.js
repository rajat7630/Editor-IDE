const Problem = require('./models/Problem');
//const TestProblem = require('./models/TestProblem');
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

// async function problemReducer(prob) {

//   const author = await Problem.query().findById(`${prob.a_id}`);

//   console.log(author);
//   return {
//     id: prob.p_id,
//     problemName :prob.problem_name,
//     description: prob.description,
//     testCase: prob.test_cases,
//     output: prob.output,
//     creationDate: prob.created_at,
//     author: {
//       id: author.rows[0].a_id,
//       email: author.rows[0].email
//     }
//   };
// }

// async function testReducer(test) {

//   const author = await Admin.query().findById(`${test.a_id}`);


//   // const problem = await client.query(
//   //   `SELECT * FROM  Problems INNER JOIN test_info ON test_info.problemid=id WHERE test_info.testid=${test.id}`
//   // );

//   const problem = await Problems.query().findById(`${prob.a_id}`);

//   return {
//     id: test.id,
//     testName: test.testname,
//     difficulty: test.difficultylevel,
//     author: {
//       id: author.rows[0].id,
//       email: author.rows[0].email
//     },
//     creationDate: test.creationdate,
//     problems: problem.rows.map((prob) => problemReducer(prob))
//   };
// }

async function getAllProblems() {
  const res =  await Problem.query();
  return res.rows.map((problem) => {
       console.log(problemReducer(problem));
    return problemReducer(problem);
  });
}

async function getProblemById(id) {
  const res =  await Problem.query().findById(id);
  console.log(res);
  return problemReducer(res.rows[0]);
}

async function getAllTests() {
  const res = await Test.query();
    return res.rows.map((test) => {
      return testReducer(test);
    });
}

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
