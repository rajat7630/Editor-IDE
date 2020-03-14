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

const getToken = gql`
  query getToken($id: ID!) {
    getToken(id:$id) {
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

export const apolloClient = {
  getProblems,
  allTests,
  getToken,
};
