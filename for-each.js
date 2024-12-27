let forEach = (arr, fx) => {
  for (let i = 0; i < arr.length; i++) {
    fx(arr[i], i, arr);
  }
};
