import gql from 'graphql-tag';

const getProblems = gql`
  query getAllProblems {
    allProblems {
      id
      problemName
      description
      problemTests
    }
  }
`;

const problemsByAuthor = gql`
  query problemsByAuthor($email:String) {
    problemsByAuthor(email:$email) {
      id
      problemName
      problemTests
      description
      difficultyLevel
      email
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
      difficultyLevel
      email
      createdAt
      problems {
        id
      }
    }
  }
`;

const testsByAuthor = gql`
  query testsByAuthor($email:String) {
    testsByAuthor(email:$email) {
      id
      testName
      difficultyLevel
    }
  }
`;

const testByToken = gql`
  query getTest {
    testByToken {
      id
      testName
      difficultyLevel
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
  mutation addNewProblem($problemName:String,$description: String,$problemTests:JSON,$difficultyLevel: String,$email: String){
    addProblem(
    data:{
      problemName: $problemName,
      description: $description,
      problemTests:$problemTests,
      difficultyLevel: $difficultyLevel,
      email: $email})
    {
    success
    message
    problems
    {
      id
      problemName
      problemTests
      description
      difficultyLevel
      email
    }
  }
}
`;

const deleteProblem = gql`
  mutation deleteProblem($id:Id!){
    deleteProblem(id:$id){
      id
      problemName
      problemTests
      description
      difficultyLevel
      email
  }
}`;

const updateProblem = gql`
  mutation updateProblem($id:ID!,$problemName:String,$description: String,$problemTests:JSON,$difficultyLevel: String){
    updateProblem(id:$id,
    data:{
      problemName: $problemName,
      description: $description,
      problemTests:$problemTests,
      difficultyLevel: $difficultyLevel})
    {
    success
    message
    problems
    {
      id
      problemName
      problemTests
      description
      difficultyLevel
      email
    }
  }
}
`;

const addTest = gql`
  mutation addNewTest($testName:String,$difficultyLevel: String,$email: String){
    addTest(data:{testName: $testName,difficultyLevel: $difficultyLevel,email: $email}){
      success
      message
      tests {
        id
        testName
        difficultyLevel
        problems {
          id
          problemName
          problemTests
          description
          difficultyLevel
          email
        }
     }
  }
}`;

const deleteTest = gql`
  mutation deleteTest($id:Id!) {
    deleteTest(id:$id){
      id
      testName
      difficultyLevel
      problems {
        id
        problemName
        problemTests
        description
        difficultyLevel
        email
      }
  }
}`;
const updateTest = gql`
mutation updateTest($id:ID!,$testName:String,$difficultyLevel: String){
  updateTest(id:$id,
    data:{testName: $testName,difficultyLevel: $difficultyLevel}){
    success
    message
    tests {
      id
      testName
      difficultyLevel
      email
      problems {
        id
        problemName
        problemTests
        description
        difficultyLevel
        email
      }
   }
}
}`;

const addUser = gql`
  mutation addNewUser($name:String,$email: String,$collegeName:String){
    addUser(data:{name: $name, email:$email, collegeName: $collegeName }) {
      success
      message
      user {
        name
        id
        collegeName
    }
  }
}
`;
const addTestProblem = gql`
  mutation addTestProblem($t_id:Int, $p_id:Int)
  {
   addTestProblem(data:{t_id: $t_id p_id: $p_id }) {
    success
    message
    test {
      id
      testName
      difficultyLevel
      problems {
        id
        problemName
        problemTests
        description
        difficultyLevel
        email
      }
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
      problemTests
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
        problemTests
        description
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
  testsByAuthor,
  deleteProblem,
  updateProblem,
  updateTest,
  allTests,
  problemsByAuthor,
  addProblem,
  addTest,
  addTestProblem,
  deleteTest,
  addUser,
  getToken,
  testByToken
};
