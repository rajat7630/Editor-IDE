const { Client, Pool } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'tryout',
  password: 'newPassword',
  port: 5432
});
client.connect(function(err) {
  if (err) console.log(err);
  else console.log('Connected!');
});

async function problemReducer(prob) {
  const author = await client.query(
    `SELECT * FROM  Author WHERE id=${prob.authorid}`
  );
  console.log(author);
  return {
    id: prob.id,
    description: prob.description,
    testCase: prob.testcase,
    output: prob.testoutput,
    creationDate: prob.creationdate,
    author: {
      id: author.rows[0].id,
      email: author.rows[0].email
    }
  };
}

async function testReducer(test) {
  const author = await client.query(
    `SELECT * FROM  Author WHERE id=${test.authorid}`
  );
  const problem = await client.query(
    `SELECT * FROM  Problems INNER JOIN test_info ON test_info.problemid=id WHERE test_info.testid=${test.id}`
  );
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
  const res = await client.query('SELECT * FROM Problems');
  return res.rows.map((problem) => {
    console.log(problemReducer(problem));
    return problemReducer(problem);
  });
}

async function getProblemById(id) {
  const res = await client.query(`SELECT * FROM Problems WHERE id=${id}`);
  console.log(res);
  return problemReducer(res.rows[0]);
}

async function getAllTests() {
  const res = await client.query(`SELECT * FROM TEST`);
  return res.rows.map((test) => {
    return testReducer(test);
  });
}

async function getTestByAuthor(id) {
  const res = await client.query(`SELECT * FROM test WHERE authorid=${id}`);
  return res.rows.map((test) => {
    return testReducer(test);
  });
}

async function getProblemsByAuthor(id) {
  const res = await client.query(`SELECT * FROM problems WHERE authorid=${id}`);
  return res.rows.map((test) => {
    return problemReducer(test);
  });
}
async function addNewProblem(problem) {
  console.log(problem.description.toString());
  const res = await client.query(
    `INSERT INTO problems(description, testcase, testoutput, authorid) VALUES ('${
      problem.description
    }', '${problem.testCase}', '${problem.output}', ${Number(
      problem.authorId
    )})`
  );
  console.log(res);
  return {
    success: true,
    message: 'Problem Added Successfully',
    Problems: getAllProblems()
  };
}

async function createNewTest(test) {
  const res = await client.query(
    `INSERT INTO test(testname, difficultylevel, authorid) VALUES ('${test.testName}','${test.difficulty}','${test.authorId}')`
  );
  const res2= await client.query(`SELECT * FROM test where testname='${test.testName}'`);
  let queryString = `INSERT INTO test_info(problemid, testid) VALUES`;
  test.problem.forEach((ele) => {
    queryString =queryString + '(' + Number(ele) + ',' + Number(res2.rows[0].id) + '),';
  });
  console.log(queryString);
  queryString= queryString.substring(0, queryString.length-1);
  console.log(queryString);
  const res1 = await client.query(queryString);
  return {
    success: true,
    message: 'Added successfully',
    test: getAllTests()
  };
}
module.exports = {
  getAllProblems,
  client,
  getProblemById,
  getAllTests,
  getTestByAuthor,
  getProblemsByAuthor,
  addNewProblem,
  createNewTest
};
