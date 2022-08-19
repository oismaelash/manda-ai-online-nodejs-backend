const { gql } = require("apollo-server-lambda");

const types = gql`
  type Post {
    id: ID
    title: String
    body: String
    type: String
    date: String
    time: String
    createdAt: String
  }

  type ResponsePosts {
    statusCode: Int
    data: [Post]
  }
`;

module.exports = types;
