const axios = require('axios')
const  { ApolloServer, gql} = require('apollo-server')

const baseUrl = 'http://localhost:3002'

const typeDefs = gql`
    type Post {
        id: ID!
        content: String!
        createdAt: String!
        updatedAt: String!
        userId: Int!
    }

    type Query {
        posts: [Post!]!
    }

    `
    // type Mutation {
    //     signup {
    //         firstName: String!
    //         lastName: String!
    //         email: String!
    //         sex: String!
    //         password: String!
    //         dateOfBirth: String!
    //     }:Token
    // }

const resolvers = {
    Query: {
        posts: () => {
            return axios.get(`${baseUrl}/api/posts/all`, {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJ0ZXN0IiwibGFzdE5hbWUiOiJ0ZXN0IGxhc3RuYW1lIiwiZW1haWwiOiJlbWFpbEBnbWFpbC5jb20iLCJhZ2UiOjEwLCJkYXRlT2ZCaXJ0aCI6IjIwMTAtMTItMTJUMDA6MDA6MDAuMDAwWiIsInNleCI6MSwiY3JlYXRlZEF0IjoiMjAyMS0wNy0xNFQwNjoyMDoyMy4wMDBaIn0sImlhdCI6MTYyNjI5MjY5NSwiZXhwIjoxNjI2NTUxODk1fQ.HiT_POeXwLd_dCcVAK-x27Fykt9FIZwSzfJ8ywxywEk"
                }
            }).then(res => res.data.posts)
        }
    }
}

const server  = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => console.log(`Graphql Server is ready on ${url}`))