const { expect } = require("chai");
const { requestReview } = require("../index");

describe("request-review", () => {
  describe("requestReview()", () => {
    it("should not throw", () => {
      expect(() => {
        requestReview();
      }).to.not.throw(/is valid func/);
    });
  });
});
