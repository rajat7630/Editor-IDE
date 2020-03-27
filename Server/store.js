const Problem = require('./models/Problem');
const TestProblem = require('./models/TestProblem');
const Test = require('./models/Test');
const User = require('./models/User');
//const Attempt = require('./models/Attempt');

const jwt = require('jsonwebtoken');
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
      problems: getAllProblems()
    };
  } catch (error) {
    console.log(error);
  }
}

async function deleteProblem(id) {
  try {
    await TestProblem.query()
                     .delete()
                     .where('p_id',id);

    await Problem.query().deleteById(id);

    return getAllProblems();
  }catch(error) {
    throw new Error(error);
  }
}

async function updateProblem(id,problem) {
  try{
    const updatedProblem = await Problem.query()
                            .patchAndFetchById(id,{
                            problemName:problem.problemName,
                            description:problem.description,
                            problemTests:Problem.problemTests,
                            difficultyLevel:problem.difficultyLevel
                          });
    return {
      success: true,
      message: 'Problem updated Successfully',
      problem: problemReducer(updatedProblem)
    };
  }catch(error){
    throw new Error(error);
  }
}
async function addNewTest(test) {
  try {
    const res = await Test.query().insert({
      testName: test.testName,
      difficultyLevel: test.difficultyLevel,
      email: test.email
    });

    return {
      success: true,
      message: 'Test Added Successfully',
      tests: getAllTests()
    };
  } catch (error) {
    console.log(error);
  }
}
async function deleteTest(id) {
  try {
    await TestProblem.query()
    .delete()
    .where('t_id',id);

    await Test.query().deleteById(id);                 
     return getAllTests();
  }catch(error) {
    throw new Error(error);
  }
}
async function updateTest(id,test) {
  try{
    const updatedTest = await Test.query()
                            .patchAndFetchById(id,{
                            testName:test.testName,
                            difficultyLevel:test.difficultyLevel
                          });
    return {
      success: true,
      message: 'Test updated Successfully',
      test: testReducer(updatedTest)
    };
  }catch(error){
    throw new Error(error);
  }
}
async function addNewUser(user) {
  try {
    const res = await User.query().insert({
      email: user.email,
      name:user.name,
      collegeName:user.collegeName
    });
    return {
      success: true,
      message: 'User Added Successfully',
      user: res
    };
  } catch (error) {
    console.log(error);
  }
}

async function addTestProblem(testProblem) {
  try {
    const res = await TestProblem.query().insert({
       t_id: testProblem.t_id,
       p_id: testProblem.p_id
    });
    const test = getTestById(testProblem.t_id);
    return {
      success: true,
      message:'Problem added successfully',
      test: test
    };
  } catch(error) {
     throw new Error(error);
  }

}
async function problemReducer(prob) {
  return {
    id: prob.id,
    problemName: prob.problemName,
    description: prob.description,
    problemTests: prob.problemTests,
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
}

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
}

async function getTestsByAuthor(email) {
  const res = await Test.query().where('email', email);
  return res.map((test) => {
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
  return res.map((problem) => {
    return problemReducer(problem);
  });
}

function getToken(id) {
  const token = jwt.sign({ testId: id }, 'helloo', {
    expiresIn: 60 * 60
  });
  console.log(token);
  return { token: token };
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
  getProblemById,
  getAllProblems,
  getProblemsByAuthor,
  addNewProblem,
  deleteProblem,
  updateProblem,
  getTestById,
  getAllTests,
  getTestsByAuthor,
  addNewTest,
  deleteTest,
  updateTest,
  addTestProblem,
  getTestByToken,
  getToken,
  sendMail,
  addNewUser
};
