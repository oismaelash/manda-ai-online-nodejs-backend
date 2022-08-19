const { gql } = require("apollo-server-lambda");

const query = gql`
  type Query {
    posts: ResponsePosts
  }
`;

module.exports = query;
