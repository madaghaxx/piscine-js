let pick = (obj, arr) => {
  let objj = {};
  if (typeof arr === "string") {
    if (obj.hasOwnProperty(arr)) {
      objj[arr] = obj[arr];
    }
  } else {
    arr.forEach((s) => {
      if (obj.hasOwnProperty(s)) {
        objj[s] = obj[s];
      }
    });
  }
  return objj;
};

let omit = (obj, arr) => {
  let newObj = { ...obj };
  if (typeof arr === "string") {
    delete newObj[arr];
  } else {
    arr.forEach((s) => {
      delete newObj[s];
    });
  }
  return newObj;
};
