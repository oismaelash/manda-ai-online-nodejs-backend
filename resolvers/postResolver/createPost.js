const response = require("../../utils/response");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.handler = async (post) => {
  try {
    const data = await prisma.post.create({
      data: {
        title: post.title,
        body: post.body,
        isSchedule: post.isSchedule,
        datetimeSchedule: post.datetimeSchedule,
      },
    });
    return response(true, data);
  } catch (error) {
    return response(false, error);
  }
};
