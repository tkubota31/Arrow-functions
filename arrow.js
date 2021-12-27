//map callback
const double = (arr) => arr.map((val) => val*2);

//replace all functions with arrow functions
const squareAndFindEvens = (numbers) => numbers.map((num)=> num ** 2).filter((square) => square % 2 ===0);
