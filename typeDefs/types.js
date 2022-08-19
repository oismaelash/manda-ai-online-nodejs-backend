const { gql } = require("apollo-server-lambda");

const types = gql`
  type Post {
    id: ID
    title: String
    body: String
    isSchedule: Boolean
    datetimeSchedule: String
    createdAt: String
  }

  type ResponsePosts {
    statusCode: Int
    data: [Post]
    error: String
  }
`;

module.exports = types;
