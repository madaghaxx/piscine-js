let debounce = (func, delay) => {
  let id;
  return function (...args) {
    clearTimeout(id);
    id = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

let opDebounce = (func, delay, option) => {
  let timer = null;
  return function (...args) {
    // let istrue = false;
    if (timer === nill && option) {
      func(...args);
      //   istrue = true;
    }
    clearTimeout(id);
    id = setTimeout(() => {
      func(...args);
      timer = null;
    }, delay);
  };
};
