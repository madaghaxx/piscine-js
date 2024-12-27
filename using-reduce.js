let adder = (arr, num) => arr.reduce((acc, curr) => acc + curr, num ? num : 0);
// console.log(adder([1, 2, 3, 4, 5]));
let sumOrMul = (arr) => {
  return arr.reduce((acc, cur) => {
    if (acc % 2 === 0) {
      return acc * cur;
    } else {
      return acc + cur;
    }
  });
};

let funcExec = (arr, func) => {
  return arr.reduce((acc, curr) => {
    return curr(acc);
  }, func);
};
console.log(adder([9, 24, 7, 11, 3], 10));
