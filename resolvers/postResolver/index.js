const allPosts = require("./allPosts");
const postsSchedule = require("./postsSchedule");
const postsShow = require("./postsShow");
const createPost = require("./createPost");

const postResolver = {
  Query: {
    allPosts: () => allPosts.handler(),
    postsSchedule: (_, { datetimeLocale }) => postsSchedule.handler(datetimeLocale),
    postsShow: (_, { datetimeLocale }) => postsShow.handler(datetimeLocale),
  },
  Mutation: {
    createPost: (_, { post }) => createPost.handler(post),
  },
};

module.exports = postResolver;
