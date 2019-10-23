const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./app/model/schema");
const cors = require("cors");
// const mongoose = require('mongoose');

const app = express();
app.use(cors());

/**
 * middleware
 */

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4321, () => {
  console.log("Server running in localhost:4321");
});
