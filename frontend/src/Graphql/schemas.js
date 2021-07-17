import { gql } from "@apollo/client";

export const typeDefs = gql`
  type Query {
    posts: [Post!]!
  }

  type Mutation {
    signUp(
      firstName: String!
      lastName: String!
      email: String!
      sex: Int!
      password: String!
      dateOfBirth: String!
    ): Response!
  }

  type Response {
    userId: String
    error: String
  }

  type Post {
    id: ID!
    content: String!
    createdAt: String!
    updatedAt: String!
    userId: Int!
  }
`;
