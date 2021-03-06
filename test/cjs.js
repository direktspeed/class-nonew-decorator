import assert from "assert";

var cjs = require("../dist/index");

describe('cjs nonew decorator', () => {
  @cjs()
  class IamClass {
    constructor(a, b) {
      this.a = a;
      this.b = b;
      console.log("IamClasss Instance!");
    }
  }

  it("create an instance from class with `new` keyword", () => assert(new IamClass() instanceof IamClass));
  it("create an instance from class without `new` keyword", () => assert(IamClass() instanceof IamClass));
  it("passing constructor arguments", () => assert(IamClass(1, 2).b === 2));
});
