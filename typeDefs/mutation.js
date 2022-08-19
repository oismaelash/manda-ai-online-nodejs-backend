const { gql } = require("apollo-server-lambda");

const mutation = gql`
  type Mutation {
    createPost(post: PostInput): Post
  }

  input PostInput {
    title: String!
    body: String!
    type: String!
    date: String!
    time: String!
  }
`;

module.exports = mutation;
