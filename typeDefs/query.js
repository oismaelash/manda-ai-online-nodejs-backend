const { gql } = require("apollo-server-lambda");

const query = gql`
  type Query {
    posts: [Post]
  }
`;

module.exports = query;
