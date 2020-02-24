import {setClient} from "svelte-apollo";
import gql from 'graphql-tag';



const getProblems = gql`
  query getAllProblems {
    problems {
      id
      description
      testcase
      output
    }
  }
`;

export const apolloClient = {
  getProblems
};
