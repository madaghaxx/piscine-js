let debounce = (func, delay) => {
  let id;
  return function (...args) {
    clearTimeout(id);
    id = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

let opDebounce = (func, delay) => {
  let timer = null;
  return function (...args) {
    if (timer === null) {
      func(...args);
    }
    clearTimeout(id);
    id = setTimeout(() => {
      func(...args);
      timer = null;
    }, delay);
  };
};
