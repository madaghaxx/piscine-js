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

const opThrottle = (func, delay, option = {}) => {
  let id;
  let lastArgs;
  let leading = false;
  return function (...args) {
    lastArgs = args;
    if (option.leading && !leading) {
      func(...args);
      leading = true;
    }
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      if (option.trailing) {
        func(...lastArgs);
      }
      id = null;
      leading = false;
    }, delay);
  };
};
