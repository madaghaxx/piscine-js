let filterKeys = (obj, func) => {
  let res = {};
  for (let key in obj) {
    if (func(key)) {
      res[key] = obj[key];
    }
  }
  return res;
};

let mapKeys = (obj, func) => {
  let res = {};
  for (let key in obj) {
    let ress = func(key);
    res[ress] = obj[key];
  }
  return res;
};

let reduceKeys = (obj, func, init) => {
  let kk = Object.keys(obj);
  let res = init !== undefined ? init : kk[0];
  for (let i = init !== undefined ? 0 : 1; i < kk.length; i++) {
    res = func(res, kk[i]);
  }
  return res;
};

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };
console.log(reduceKeys(nutrients, (acc, cr) => acc.concat(", ", cr)));
