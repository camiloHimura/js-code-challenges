const pyramid = require("./index");
console.log = jest.fn();

beforeEach(() => {
  console.log.mockRestore();
});

it("one level", () => {
  pyramid(1);

  expect(console.log).toHaveBeenCalledWith("'#'");
});

it("two levels", () => {
  pyramid(2);
  const [level1, level2] = console.log.mock.calls;
  expect(level1[0]).toBe("' # '");
  expect(level2[0]).toBe("'###'");
});

it("eleven levels", () => {
  pyramid(11);
  const calls = console.log.mock.calls;
  expect(calls[0][0]).toBe("'          #          '");
  expect(calls[1][0]).toBe("'         ###         '");
  expect(calls[2][0]).toBe("'        #####        '");
  expect(calls[calls.length - 1][0]).toBe("'#####################'");
});
