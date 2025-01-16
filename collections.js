let arrToSet = (arr = []) => {
  return new Set(arr);
};

let arrToStr = (arr) => arr.join("");
let setToArr = (set) => Array.from(set);
let setToStr = (set) => arrToStr(setToArr(set));
let strToArr = (str) => str.split("");
let strToSet = (str) => arrToSet(strToArr(str));
let mapToObj = (map) => {
  let obj = {};
  for (const [key, value] of map.entries()) {
    obj[key] = value;
  }
  return obj;
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
let superTypeOf = (ele) => {
  if (Array.isArray(ele)) return "Array";
  if (ele instanceof Set) return "Set";
  if (ele instanceof Map) return "Map";
  if (ele === null) return "null";
  if (ele instanceof Function) return "Function";
  if (typeof ele == "string") return "String";
  if (typeof ele == "number") return "Number";
  if (ele instanceof Object) return "Object";
  return typeof ele;
};
