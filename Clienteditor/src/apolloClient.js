import gql from 'graphql-tag';

const getProblems = gql`
  query getAllProblems {
    allProblems {
      id
      problemName
      description
    }
  }
`;

const getToken = gql`
  query getToken($id: ID!) {
    getToken(id: $id) {
      token
    }
  }
`;

const allTests = gql`
  query getTest {
    allTests {
      id
      testName
    }
  }
`;

const testByToken = gql`
  query getTest {
    testByToken {
      id
      testName
    }
  }
`;

const sendMail = gql`
  mutation mailSender($mailBody: String, $email: String) {
    sendMail(mailBody: $mailBody, email: $email) {
      success
      message
    }
  }
`;

const addProblem = gql`
  mutation addNewProblem(
      $problemName:String,
      $description: String,
      $problemTests:JSON,
      $difficultyLevel: String,
      $email: String
  )
  {
    addProblem(
    data:{
      problemName: $problemName,
      description: $description,
      problemTests:$problemTests,
      difficultyLevel: $difficultyLevel,
      email: $email
    }
  )
  {
    success
    message
    problems
    {
      problemName
    }
  }
  }
`;
const addTest = gql`
  mutation addNewTest(
      $testName:String,
      $difficultyLevel: String,
      $email: String
  )
  {
   addTest(
    data:{
      testName: $testName,
      difficultyLevel: $difficultyLevel,
      email: $email
    }
  )
  {
    success
    message
    tests
    {
      testName
    }
  }
  }
`;
const addUser = gql`
  mutation addNewUser(
      $name:String,
      $email: String,
      $collegeName:String
  )
  {
  addUser(
    data:{
      name: $name
      email:$email
      collegeName: $collegeName
    }
  )
  {
    success
    message
    user
    {
      name
      id
      collegeName
    }
  }
  }
`;

const getProblemById = gql`
  query getProblemById($id: ID!) {
    problemById(id: $id) {
      id
      description
      createdAt
      difficultyLevel
      problemName
    }
  }
`;

const getTestById = gql`
  query getTestById($id: ID!) {
    testById(id: $id) {
      id
      testName
      difficultyLevel
      problems {
        id
        problemName
        difficultyLevel
        email
      }
    }
  }
`;

export const apolloClient = {
  sendMail,
  getTestById,
  getProblems,
  getProblemById,
  allTests,
  addProblem,
  addTest,
  addUser,
  getToken,
  testByToken
};
