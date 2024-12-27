let mapper = (arr, fx) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fx(arr[i]));
  }
  return res;
};

