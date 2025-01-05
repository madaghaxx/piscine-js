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
};
