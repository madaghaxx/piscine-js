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
    obj[map[i][0]] = map[i][1];
    i++;
  }
};
let objToArr = (obj) => {
  return Object.values(obj);
};

let objToMap = (obj) => {
  let map = new Map();
  for (const [key, value] of Object.entries(obj)) {
    map.set(key, value);
  }
  return map;
};

let arrToObj = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }
  return obj;
};

let strToObj = (str) => {
  let arr = str.split("");
  return arrToObj(arr);
};
