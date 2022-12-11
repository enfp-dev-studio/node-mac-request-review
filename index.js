const native = require("bindings")("request_review.node");

module.exports = {
  requestReview: native.requestReview,
};
