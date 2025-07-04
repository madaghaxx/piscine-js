let debounce = (func, delay) => {
  let id;
  return function (...args) {
    clearTimeout(id);
    id = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

let opDebounce = (func, delay, option = {}) => {
  let timer;
  let called = false;
  return function (...args) {
    if (option.leading && !called) {
      func(...args);
      called = true;
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
