let debounce = (func, delay) => {
  let id;
  return function () {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      func();
    }, delay);
  };
};
