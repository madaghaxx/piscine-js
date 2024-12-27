let adder = (arr, num) => arr.reduce((acc, curr) => acc + curr, num ? num : 0);
// console.log(adder([1, 2, 3, 4, 5]));

function sumOrMul(arr, c = 0) {
  return arr.reduce((acc, cur) => {
    if (cur % 2 === 0) {
      acc *= cur;
    } else {
      acc += cur;
    }
    return acc;
  }, c);
}

let funcExec = (arr, func) => {
  return arr.reduce((acc, curr) => {
    return curr(acc);
  }, func);
};

// console.log(sumOrMul([29, 23, 3, 2, 25]));
// console.log(sumOrMul([1, 2, 3, 5, 8],5));
