let arrToSet = (arr = []) => {
  let res = [];
  arr.forEach((ele) => {
    if (!res.includes(ele)) {
      res.push(ele);
    }
  });
  return res;
};

let arrToStr = (arr) => {
  let res = "";
  arr.forEach((ele) => {
    res += ele;
  });
  return res;
};

let setToArr = (set) => Array.from(set);
let setToStr = (set) => arrToStr(setToArr(set));
let strToArr = (str)=>{}