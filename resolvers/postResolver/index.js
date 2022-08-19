const posts = require("./posts");
const createPost = require("./createPost");

const postResolver = {
  Query: {
    posts: () => posts.handler(),
  },
  Mutation: {
    createPost: (_, { post }) => createPost.handler(post),
  },
};

module.exports = postResolver;
