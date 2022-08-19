module.exports = (success, data) => {
  if (success) {
    return {
      statusCode: 200,
      data: data,
    };
  } else {
    return {
      statusCode: 400,
      data: null,
      error: data,
    };
  }
};
