let retry = (count, callback) => {
  return function (...args) {
    return callback(...args)
      .then((data) => data)
      .catch((error) => {
        if (count > 0) {
          return retry(count - 1, callback)(...args);
        } else {
          throw error;
        }
      });
  };
};

let timeout = (delay, callback) => {
  return function (...args) {
    let time = Date.now();
    return callback(...args)
      .then((data) => data)
      .catch(() => {
        if (Date.now() - time < delay) {
          return timeout(delay, callback)(...args);
        } else {
          throw "timeout";
        }
      });
  };
};
