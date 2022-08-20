const response = require("../../utils/response");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.handler = async (datetimeLocale) => {
  try {
    const data = await prisma.post.findMany({
      where: {
        AND: [
          {
            isSchedule: true,
          },
          {
            datetimeSchedule: {
              gt: datetimeLocale,
            },
          },
        ],
      },
    });
    return response(true, data);
  } catch (error) {
    return response(false, error);
  }
};
