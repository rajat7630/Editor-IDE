import gql from 'graphql-tag';

const getProblems = gql`
  query getAllProblems {
    allProblems {
      id
      description
      testCase
      output
    }
  }
`;

const allTests = gql`
  query gett {
    allTests {
      id
      testName
    }
  }
`;

export const apolloClient = {
  getProblems,
  allTests
};
