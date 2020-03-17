const { gql } = require('apollo-server');
const { ApolloServer } = require('apollo-server');
const typeDefs = gql`
  scalar JSON
  scalar JSONObject

  type Problem {
    id: ID!
    problemName: String
    description: String
    createdAt: String
    testCases: JSON
    difficultyLevel: String
    email: String
  }

  type Payload {
    token: String!
  }

  type Test {
    id: ID!
    testName: String
    difficultyLevel: String
    email: String
    createdAt: String
    problems: [Problem]
  }
  type Student {
    id: ID!
    email: String
    name: String
    collegeName: String
  }
  type Solution {
    id: ID!
    solution: String
    problem: Problem
  }
  type Query {
    getToken(id: ID!): Payload
    allProblems: [Problem]
    problemById(id: ID!): Problem
    allTests: [Test]
    testByAuthor(id: ID!): [Test]
    problemsByAuthor(id: ID!): [Problem]
    testByToken(token: String): Test
  }
  type Mutation {
    addProblem(
      description: String
      testCase: String
      output: String
      authorId: ID
    ): addNewProblem!
    addTest(
      testName: String
      difficulty: String
      authorId: ID
      problem: [ID]
    ): createTest

    addUser(
      name: String 
      email: String 
      collegeName: String
      ): userDetails

    sendMail(
      mailBody: String 
      email: String
      ): mailSent
  }

  type mailSent {
    success: Boolean
    message: String
  }
  type userDetails {
    success: Boolean
    message: String
    Details: Student
  }

  type createTest {
    success: Boolean
    message: String
    test: [Test]
  }
  type addNewProblem {
    success: Boolean!
    message: String
    Problems: [Problem]
  }
`;

module.exports = typeDefs;
