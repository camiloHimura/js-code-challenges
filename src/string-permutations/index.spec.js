const permutations = require("./index");
console.log = jest.fn();

beforeEach(() => {
  console.log.mockRestore();
});

describe("abcd", () => {
  permutations("abcd");
  const calls = console.log.mock.calls;

  it("console", () => {
    expect(calls[0][0]).toBe("abcd");
    expect(calls[1][0]).toBe("acdb");
    expect(calls[2][0]).toBe("adbc");
    expect(calls[3][0]).toBe("bcda");
    expect(calls[4][0]).toBe("bdac");
    expect(calls[5][0]).toBe("bacd");
    expect(calls[6][0]).toBe("cdab");
    expect(calls[7][0]).toBe("cabd");
    expect(calls[8][0]).toBe("cbda");
    expect(calls[9][0]).toBe("dabc");
    expect(calls[10][0]).toBe("dbca");
    expect(calls[11][0]).toBe("dcab");
  });
});
