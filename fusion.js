let fusion = (...objs) => {
  let res = {};
  objs.forEach((obj) => {
    for (key in obj) {
      if (Array.isArray(obj[key])) {
        if (!res[key]) {
          res[key] = [];
        }
        res[key].push(obj[key]);
        res[key] = res[key].flat();
      }

      if (typeof obj[key] == "string") {
        if (!res[key]) {
          res[key] = obj[key];
        } else {
          res[key] += " " + obj[key];
        }
      }
      if (Number.isInteger(obj[key])) {
        if (!res[key]) {
          res[key] = 0;
        }
        res[key] += obj[key];
      }
      if (typeof obj[key] == "object" && !Array.isArray(obj[key])) {
        if (!res[key]) {
          res[key] = {};
        }
        res[key] = fusion(res[key], obj[key]);
      }
    }
  });
  return res;
};
