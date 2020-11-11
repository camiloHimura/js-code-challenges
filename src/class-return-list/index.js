// The defined class has a get returning a list of brands.
// The code has to print all brands defined in the getter as a comma separated list (string) in reverse order.

// -Only the class can be modified.
// -Returning value in the constructor is not a solution. The constructos function should stay untouched.

/* class BrandCollector {
  //DO NOT EDIT IT
  constructor() {
    return this;
  }

  get brands() {
    return ["a", "b", "c"];
  }

  new BrandCollector() === ["c", "b", "a"]
} */

class BrandCollector {
  //DO NOT EDIT IT
  constructor() {
    return this;
  }
  get brands() {
    return ["a", "b", "c"];
  }
  //thanks to https://github.com/Angelfire for his elegant solution
  [Symbol.iterator]() {
    return this.brands.reverse().values();
  }
}

module.exports = BrandCollector;
