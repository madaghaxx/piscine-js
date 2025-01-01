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
  if (typeof arr === "string") {
    delete obj[arr];
  } else {
    arr.forEach((s) => {
      delete obj[s];
    });
  }
  return obj;
};
