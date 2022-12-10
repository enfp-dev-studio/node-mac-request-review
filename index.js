const native = require("bindings")("request_review.node");

console.log("addon", native.requestReview());

module.exports = {
  requestReview: native.requestReview,
};
