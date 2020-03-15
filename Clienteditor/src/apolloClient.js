import gql from 'graphql-tag';

const getProblems = gql`
  query getAllProblems {
    allProblems {
      id
      problemName
      description
      testCases
      createdAt
      difficultyLevel
      email
    }
  }
`;

const allTests = gql`
  query gett {
    allTests {
      id
      testName
      difficultyLevel
      email
      createdAt
      problems {
        id
      }
    }
  }
`;

export const apolloClient = {
  getProblems,
  allTests
};
