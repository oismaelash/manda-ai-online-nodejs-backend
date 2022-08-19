const { gql } = require("apollo-server-lambda");

const mutation = gql`
  type Mutation {
    createPost(post: PostInput): Post
  }

  input PostInput {
    title: String!
    body: String!
    isSchedule: Boolean!
    datetimeSchedule: String
  }
`;

module.exports = mutation;
