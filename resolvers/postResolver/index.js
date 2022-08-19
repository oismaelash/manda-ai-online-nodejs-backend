const allPosts = require("./allPosts");
const postsSchedule = require("./postsSchedule");
const postsShow = require("./postsShow");
const createPost = require("./createPost");

const postResolver = {
  Query: {
    allPosts: () => allPosts.handler(),
    postsSchedule: () => postsSchedule.handler(),
    postsShow: () => postsShow.handler(),
  },
  Mutation: {
    createPost: (_, { post }) => createPost.handler(post),
  },
};

module.exports = postResolver;
