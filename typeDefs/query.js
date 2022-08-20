const { gql } = require("apollo-server-lambda");

const query = gql`
  type Query {
    allPosts: ResponsePosts
    postsSchedule(datetimeLocale: String): ResponsePosts
    postsShow(datetimeLocale: String): ResponsePosts
  }
`;

module.exports = query;
