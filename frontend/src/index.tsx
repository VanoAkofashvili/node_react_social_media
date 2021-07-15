import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
// import { setContext } from '@apollo/client/link/context'

// create a header for graphql request with token
// const authLink = setContext((_, { headers }) => {
// const token  = localStorage.getItem('token')
// return {
//     headers: {
//       ...headers,
//       authorization: token ? `bearer  ${token}`: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJ0ZXN0IiwibGFzdE5hbWUiOiJ0ZXN0IGxhc3RuYW1lIiwiZW1haWwiOiJlbWFpbEBnbWFpbC5jb20iLCJhZ2UiOjEwLCJkYXRlT2ZCaXJ0aCI6IjIwMTAtMTItMTJUMDA6MDA6MDAuMDAwWiIsInNleCI6MSwiY3JlYXRlZEF0IjoiMjAyMS0wNy0xNFQwNjoyMDoyMy4wMDBaIn0sImlhdCI6MTYyNjI5MjY5NSwiZXhwIjoxNjI2NTUxODk1fQ.HiT_POeXwLd_dCcVAK-x27Fykt9FIZwSzfJ8ywxywEk'
//     }
//   }
// })

// create endpoing for graphql
const httpLink = new HttpLink({ uri: "http://localhost:4000"})

// create graphql client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  // link: authLink.concat(httpLink) // adding token to the header
  link: httpLink
});

// render
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
