const { gql } = require("@apollo/client")


export const ALL_POSTS = gql`
  query {
    posts {
      id
      content
    }
  }
`
