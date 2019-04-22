import { add } from "../index";

describe("this is a terrible test", () => {
  it("should assert that true is true", () => {
    expect(true).toBe(true);
  });

  it("should add two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});
