let filterValues = (obj, func) => {
  let res = {};
  for (let key in obj) {
    if (func(obj[key])) {
      res[key] = obj[key];
    }
  }
  return res;
};

let mapValues = (obj, func) => {
  let res = {};
  for (key in obj) {
    res[key] = func(obj[key]);
  }
  return res;
};
let reduceValues = (obj, func, initial=0) => {
  let res = initial;
  for (let key in obj) {
    res = func(res, obj[key]);
  }
  return res;
};

// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 };
// console.log(filterValues(nutrients, (nutrient) => nutrient <= 12));
// console.log(mapValues(nutrients, (v) => v + 1));
// console.log(reduceValues(nutrients, (acc, cr) => acc + cr));
// console.log(reduceValues(nutrients, (acc, cr) => acc + cr, 0));
