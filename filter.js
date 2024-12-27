let filter = (arr, fx) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fx(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res;
};

let reject = (arr, fx) => {
  return filter(arr, (el, i, arr) => !fx(el, i, arr));
};

let partition = (arr, fx) => {
  return [filter(arr, fx), reject(arr, fx)];
};
