// --- Directions
// Write a function that accepts an string.
// The function should console log all posible permutation on that string

// --- Examples
//   permutations(abcd)
// abcd
// acdb
// adbc
// bcda
// bdac
// bacd
// cdab
// cabd
// cbda
// dabc
// dbca
// dcab

function swap(data = [], callback) {
  let iData = [...data];
  for (const element of data) {
    const [first, ...others] = iData;
    callback(first, others);
    iData = [...others, first];
  }
}

module.exports = function permutations(text = "") {
  swap([...text], (head, others) => {
    swap(others, (first, iOthers) => {
      console.log(`${head}${first}${iOthers.join("")}`);
    });
  });
};
