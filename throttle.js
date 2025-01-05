const _ = require("lodash");

const throttle = (func, delay) => {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};
const opThrottle = (func, wait, option = {}) => {
  let timeout = null;
  let lastCall = 0;

  return function (...args) {
    const now = new Date().getTime();

    if (option.leading === false && lastCall === 0) {
      lastCall = now;
    }

    const remaining = wait - (now - lastCall);

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      lastCall = now;
      func(...args);
    } else if (!timeout && option.trailing !== false) {
      timeout = setTimeout(() => {
        lastCall = option.leading === false ? 0 : new Date().getTime();
        timeout = null;
        func(...args);
      }, remaining);
    }
  };
};
