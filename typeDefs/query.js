const { gql } = require("apollo-server-lambda");

const query = gql`
  type Query {
    allPosts: ResponsePosts
    postsSchedule: ResponsePosts
    postsShow: ResponsePosts
  }
`;

module.exports = query;
