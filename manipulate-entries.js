let filterEntries = (obj, func) => {
  let res = {};
  for (let [key, val] of Object.entries(obj))
    if (func([key, val])) {
      res[key] = val;
    }
  return res;
};

let mapEntries = (obj, func) => {
  let res = {};
  for (let [key, val] of Object.entries(obj)) {
    let [nkey, nval] = func([key, val]);
    res[nkey] = nval;
  }
  return res;
};

let reduceEntries = (obj, func, initialValue) => {
  let res = Object.entries(obj);
  return res.reduce(func, initialValue);
};

let totalCalories = (obj) => {
    return obj.reduceEntries()
};
