let map = (arr, fx) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fx(arr[i], i, arr));
  }
  return res;
};
const flat = (arr, num = 1) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && num > 0) {
      res = res.concat(flat(arr[i], num - 1));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};

let flatMap = (arr, fx) => {
  return flat(map(arr, fx));
};
