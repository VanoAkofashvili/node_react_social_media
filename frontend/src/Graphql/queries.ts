const { gql } = require("@apollo/client");

export const ALL_POSTS = gql`
  query {
    posts {
      id
      content
    }
  }
`;
export const SIGN_UP = gql`
  mutation signup(
    $firstName: String!
    $lastName: String!
    $email: String!
    $sex: Int!
    $password: String!
    $dateOfBirth: String!
  ) {
    signUp(
      firstName: $firstName
      lastName: $lastName
      email: $email
      sex: $sex
      password: $password
      dateOfBirth: $dateOfBirth
    ) {
      userId
      error
    }
  }
`;
