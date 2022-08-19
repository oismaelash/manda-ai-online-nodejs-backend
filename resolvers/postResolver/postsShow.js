const response = require("../../utils/response");
const datetimeUtils = require("../../utils/datetime");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.handler = async () => {
  try {
    const data = await prisma.post.findMany({
      where: {
        datetimeSchedule: {
          gte: datetimeUtils.datetimeLocaleCurrent(),
        },
      },
    });
    return response(true, data);
  } catch (error) {
    return response(false, error);
  }
};
