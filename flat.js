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
console.log(flat([1, [2]]));
