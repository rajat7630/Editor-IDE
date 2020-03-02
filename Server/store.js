
const { User, Admin, Tests, Problems,Attempts } = require('./models/schema')



async function addNewProblem(problem) {

  //console.log(problem.description.toString());

  const res = await Problems.query().insert({
    problem_name: `${problem.name}`,
    description: `${problem.description}`,
    test_cases: `${problem.testcase}`,
    output:     `${problem.output}`,
    difficuly_level:`${problem.difficulty}`,
    a_id: `${problem.a_id}`
  });
  console.log(res);
  return {
    success: true,
    message: 'Problem Added Successfully',
    Problems: getAllProblems()
  };
}

async function createNewTest(test) {

  const res = await Tests.query().insert({
    test_name: `${test.name}`,
    difficuly_level: `${test.difficulty}`,
    a_id: `${test.a_id}`,
    problems_id:`${test.problems}`
  });

  return {
    success: true,
    message: 'Test Created successfully',
    test: getAllTests()
  };
}


async function problemReducer(prob) {

  const author = await Admin.query().findById(`${prob.a_id}`);

  console.log(author);
  return {
    id: prob.p_id,
    problemName :prob.problem_name,
    description: prob.description,
    testCase: prob.test_cases,
    output: prob.output,
    creationDate: prob.created_at,
    author: {
      id: author.rows[0].a_id,
      email: author.rows[0].email
    }
  };
}

async function testReducer(test) {

  const author = await Admin.query().findById(`${test.a_id}`);


  // const problem = await client.query(
  //   `SELECT * FROM  Problems INNER JOIN test_info ON test_info.problemid=id WHERE test_info.testid=${test.id}`
  // );

  const problem = await Problems.query().findById(`${prob.a_id}`);

  return {
    id: test.id,
    testName: test.testname,
    difficulty: test.difficultylevel,
    author: {
      id: author.rows[0].id,
      email: author.rows[0].email
    },
    creationDate: test.creationdate,
    problems: problem.rows.map((prob) => problemReducer(prob))
  };
}

async function getAllProblems() {
  const res =  await Problems.query();
  return res.rows.map((problem) => {
    console.log(problemReducer(problem));
    return problemReducer(problem);
  });
}

async function getProblemById(id) {
  const res =  await Problems.query().findById(`${id}`);
  console.log(res);
  return problemReducer(res.rows[0]);
}

async function getAllTests() {
  const res = await Tests.query();
  return res.rows.map((test) => {
    return testReducer(test);
  });
}

async function getTestByAuthor(id) {
  const res = await Tests.query().where('a_id',`${id}`);
  //const res = await client.query(`SELECT * FROM test WHERE authorid=${id}`);
  return res.rows.map((test) => {
    return testReducer(test);
  });
}

async function getProblemsByAuthor(id) {
  const res = await Problems.query().where('a_id',`${id}`);
  //const res = await client.query(`SELECT * FROM problems WHERE authorid=${id}`);
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
