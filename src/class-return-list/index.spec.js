const BrandCollector = require("./index");

it("is Iterable", () => {
  expect(typeof new BrandCollector()[Symbol.iterator]).toBe("function");
});

it("is inverted", () => {
  expect(Array.from(new BrandCollector())).toEqual(["c", "b", "a"]);
});
