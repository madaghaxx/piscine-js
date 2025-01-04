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
  let timer = null;
  return function (...args) {
    if (timer === null && option.leading) {
      func(...args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
      timer = null;
    }, delay);
  };
};
