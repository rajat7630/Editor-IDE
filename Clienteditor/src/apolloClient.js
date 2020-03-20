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
  getToken,
  testByToken
};
