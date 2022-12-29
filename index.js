var binding = require("node-gyp-build")(__dirname);

module.exports = {
  requestReview: binding.requestReview,
};
