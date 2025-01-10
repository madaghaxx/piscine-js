let arrToSet = (arr = []) => {
  let res = [];
  arr.forEach((ele) => {
    if (!res.includes(ele)) {
      res.push(ele);
    }
  });
  return res;
};

let arrToStr = (arr) => arr.join("");

let setToArr = (set) => Array.from(set);
let setToStr = (set) => arrToStr(setToArr(set));
let strToArr = (str) => str.split(" ");
let strToSet = (str) => strToArr(arrToSet(str));
let mapToObj = (map) => {
  let obj = {};
  let i = 0;
  while (i < map.length) {
    
  }
};
