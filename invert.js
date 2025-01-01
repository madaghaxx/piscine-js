let invert = (obj) => {
  let objj = {};
  for (const [key, val] of Object.entries(obj)) {
    objj[val] = key;
  }
  return objj;
};
