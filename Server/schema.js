const { gql } = require('apollo-server');
const { ApolloServer } = require('apollo-server');
const typeDefs = gql`
  type Problem {
    id: ID!
    problemName: String
    description: String
    testCase: String
    output: String
    creationDate: String
    author: Author
  }

  type Payload {
    token:String!
  }

  type Test {
    id: ID!
    testName: String
    difficulty: String
    author: Author
    creationDate: String
    problems: [Problem]
  }

  type Author {
    id: ID!
    email: String
  }

  type Student {
    id: ID!
    email: String
    solution: [Solution]
  }

  type Solution {
    id: ID!
    solution: String
    problem: Problem
  }

  type Query {
    getToken(id:ID!):Payload
    allProblems: [Problem]
    problemById(id: ID!): Problem
    allTests: [Test]
    testByAuthor(id: ID!): [Test]
    problemsByAuthor(id: ID!): [Problem]
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
