const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require("graphql");

// Create Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    message: {
      type: GraphQLString,
      resolve() {
        return "Hello Tameesh! GraphQL Server is Running";
      }
    }
  }
});

// Create Schema
const schema = new GraphQLSchema({
  query: RootQuery
});

const app = express();

// GraphQL Middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

// Start Server
app.listen(4000, () => {
  console.log("Server running at http://localhost:4000/graphql");
});