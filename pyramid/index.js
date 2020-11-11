// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

module.exports = function pyramid(size) {
  let items = -1;
  const TotalItems = size * 2 - 1;

  for (let i = 0; i < size; i++) {
    items += 2;
    const spaces = (TotalItems - items) / 2;
    console.log(
      `'${"".padStart(spaces, " ")}${"#".repeat(items)}${"".padEnd(
        spaces,
        " "
      )}'`
    );
  }
};
