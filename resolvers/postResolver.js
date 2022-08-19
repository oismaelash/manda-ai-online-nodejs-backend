const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const fruitResolver = {
  Query: {
    async posts() {
      return await prisma.post.findMany();
    },
  },
  Mutation: {
    async createPost(_, { post }) {
      const postCreated = await prisma.post.create({
        data: {
          title: post.title,
          body: post.body,
          type: post.type,
          date: post.date,
          time: post.time,
        },
      });
      return postCreated;
    },
  },
};

module.exports = fruitResolver;
