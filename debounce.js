let debounce = (func, delay) => {
  let id;
  return function (...args) {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
