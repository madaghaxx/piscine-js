let throttle = (func, delay) => {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};

let opThrottle = (func, delay, option = {}) => {
    let id;
    let lastArgs;
    let leadingCalled = false;
    return function (...args) {
        lastArgs = args;
        if (option.leading && !leadingCalled) {
            func(...args);
            leadingCalled = true;
        }
        if (id) {
            clearTimeout(id);
        }
        id = setTimeout(() => {
            if (option.trailing) {
                func(...lastArgs);
            }
            leadingCalled = false;
        }, delay);
    };
};
