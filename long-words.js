let longWords = (arr) => {
  return arr.every((word) => word.length > 5);
};

let oneLongWord = (arr) => {
  return arr.some((word) => word.length >= 10);
};

let noLongWords = (arr) => {
  return arr.every((word) => word.length < 7);
};
