const response = require("../../utils/response");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.handler = async () => {
  try {
    const data = await prisma.post.findMany();
    return response(true, data);
  } catch (error) {
    return response(false, error);
  }
};
