import { ApolloServer, gql } from "apollo-server-koa";
import Koa from "koa";

const typeDefs = gql`
  type Query {
    hello: String!
    todos: [Todo!]
  }
  type Todo {
    id: Int
    title: String!
    content: String
    completed: Boolean!
    created_at: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "world",
    todos: () => {
      return [
        {
          id: 1,
          title: "Hello World",
          content: "This is the new life",
          completed: false
        }
      ];
    }
  }
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
});

const app = new Koa();

apolloServer.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(
    `🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`
  );
});
