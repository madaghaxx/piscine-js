let throttle = (func, delay) => {
  let id;
  return function (...args) {
    clearTimeout(id);
    id = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

let opThrottle = (func, delay, option = {}) => {
  let id;
  let lastArgs;
  return function (...args) {
    lastArgs = args;
    clearTimeout(id);
    id = setTimeout(() => {
      if (option.trailing) {
        func(...lastArgs);
      } else {
        func(...args);
      }
    }, delay);
  };
};
