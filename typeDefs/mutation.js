const { gql } = require("apollo-server-lambda");

const mutation = gql`
  type Mutation {
    createPost(post: PostInput): ResponsePost
  }

  input PostInput {
    title: String!
    body: String!
    isSchedule: Boolean!
    datetimeSchedule: String
  }
`;

module.exports = mutation;
