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
function opThrottle(func, time, obj = {}) {
  let reset = true;
  return function (...arg) {
    if (reset) {
      reset = false;
      if (obj.leading) {
        func(...arg);
      }
      setTimeout(() => {
        if (!obj.leading) {
          func(...arg);
        }
        reset = true;
      }, time);
    }
  };
}
