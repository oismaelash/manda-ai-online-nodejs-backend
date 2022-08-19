const response = require("../../utils/response");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.handler = async (post) => {
  try {
    const data = await prisma.post.create({
      data: {
        title: post.title,
        body: post.body,
        type: post.type,
        date: post.date,
        time: post.time,
      },
    });

    return response(true, data);
  } catch (error) {
    return response(false, error);
  }
};
