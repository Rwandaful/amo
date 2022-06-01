module.exports = async (request, response, next) => {
  const { language = "kiny" } = request.query;
  request.language = language;
  next();
};
