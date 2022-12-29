// const native = require("bindings")("request_review.node");

// module.exports = {
//   requestReview: native.requestReview,
// };

var binding = require("node-gyp-build")(__dirname);

module.exports = binding;
