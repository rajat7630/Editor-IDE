const Problem = require('./models/Problem');
const TestProblem = require('./models/TestProblem');
const Test = require('./models/Test');
const jwt = require('jsonwebtoken');
//const Attempt = require('./models/Attempt');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'tryouteditor@gmail.com',
    pass: 'tryout@123'
  }
});

let mailOptions = {
  from: 'tryouteditor@gmail.com',
  to: '',
  subject: 'Test from Sourcefuse Technologies',
  text: ''
};
async function addNewProblem(problem) {
  try {
    const res = await Problem.query()
      .insert({
        problemName: problem.problemName,
        description: problem.description,
        problemTests: problem.problemTests,
        difficultyLevel: problem.difficultyLevel,
        email: problem.email
      })
      .debug();

    return {
      success: true,
      message: 'Problem Added Successfully',
      Problems: getAllProblems()
    };
  } catch (error) {
    console.log(error);
  }
}

async function createNewTest(test) {
  try {
    const res = await Test.query().insert({
      testName: test.testName,
      difficultyLevel: test.difficultyLevel,
      email: test.email
    });
  } catch (error) {
    console.log(error);
  }
}

async function problemReducer(prob) {
  return {
    id: prob.id,
    problemName: prob.problemName,
    description: prob.description,
    testCases: prob.problemTests,
    difficultyLevel: prob.difficultyLevel,
    createdAt: prob.createdAt,
    email: prob.email
  };
}

async function testReducer(test) {
  const problem = await Problem.query().where(
    'id',
    'IN',
    TestProblem.query()
      .select('p_id')
      .where('t_id', test.id)
  );
  //console.log(problem);
  // console.log(test.id);
  //console.log(problem.map((prob) => {return problemReducer(prob);}));
  return {
    id: test.id,
    testName: test.testName,
    difficultyLevel: test.difficultyLevel,
    email: test.email,
    createdAt: test.createdAt,
    problems: problem.map((prob) => {
      return problemReducer(prob);
    })
  };
}

async function getAllProblems() {
  const res = await Problem.query();
  return res.map((problem) => {
       console.log(problemReducer(problem));
    return problemReducer(problem);
  });
  //console.log(res);
}

//getAllProblems();

async function getProblemById(id) {
  const res = await Problem.query().findById(id);
  console.log(res);
  return problemReducer(res);
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
  const res = await Test.query().where('email', email);
  return res.rows.map((test) => {
    return testReducer(test);
  });
}

async function getTestById(id){
  const res= await Test.query().where("id", id);
  console.log(res);
  return testReducer(res[0]);
}

async function getProblemsByAuthor(email) {
  const res = await Problem.query().where('email', email);
  return res.rows.map((test) => {
    return problemReducer(test);
  });
}

function getToken(id) {
  const token = jwt.sign({ testId: id }, 'helloo', {
    expiresIn: 60 * 60
  });
  console.log(token);
  return { token: token };
}

function addNewUser(newUser) {
  console.log(newUser);
  return {
    success: true,
    message: 'Successfully added',
    Details: newUser
  };
}

function getTestByToken(token) {
  console.log(token);
  const decode = jwt.decode(token);
  console.log(decode);
}

function sendMail(mailDetails) {
  console.log(mailDetails);
  mailOptions.text = mailDetails.mailBody;
  mailOptions.to = mailDetails.email;
  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(('Email Sent: ', info));
      return {
        success: true,
        message: 'mail sent successfully'
      };
    }
  });
}

module.exports = {
  getTestById,
  sendMail,
  getTestByToken,
  addNewUser,
  getToken,
  getAllProblems,
  getProblemById,
  getAllTests,
  getTestByAuthor,
  getProblemsByAuthor,
  addNewProblem,
  createNewTest
};
