import axios from "axios";
import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schemas";

const baseUrl = "http://localhost:3002";

const resolvers = {
  Query: {
    posts: () => {
      return axios
        .get(`${baseUrl}/api/posts/all`, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJ0ZXN0IiwibGFzdE5hbWUiOiJ0ZXN0IGxhc3RuYW1lIiwiZW1haWwiOiJlbWFpbEBnbWFpbC5jb20iLCJhZ2UiOjEwLCJkYXRlT2ZCaXJ0aCI6IjIwMTAtMTItMTJUMDA6MDA6MDAuMDAwWiIsInNleCI6MSwiY3JlYXRlZEF0IjoiMjAyMS0wNy0xNFQwNjoyMDoyMy4wMDBaIn0sImlhdCI6MTYyNjI5MjY5NSwiZXhwIjoxNjI2NTUxODk1fQ.HiT_POeXwLd_dCcVAK-x27Fykt9FIZwSzfJ8ywxywEk",
          },
        })
        .then((res) => res.data.posts);
    },
  },
  Mutation: {
    signUp: (parent, args) => {
      console.log(args);
      return axios
        .post(`${baseUrl}/auth/signup`, args)
        .then((res) => {
          // if post is success returns userId, who signed up and error
          if (res.data.success) {
            return { userId: res.data.userId };
          } else {
            return { error: "sign is failed" };
          }
        })
        .catch((error) => {
          return { error: error.response.data.data[0].msg };
        });
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen()
  .then(({ url }) => console.log(`Graphql Server is ready on ${url}`));
