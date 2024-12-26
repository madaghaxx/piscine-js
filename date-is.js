let isValid = (s) => {
  if (isNaN(s)) return false;
  if (new Date(s) == "Invalid Date") return false;
  return true;
};

let isAfter = (s1, s2) => {
  if (isValid(s1) && isValid(s2)) {
    return new Date(s1) > new Date(s2);
  }
  return new Date(s1) < new Date(s2);
};
let isBefore = (s1, s2) => {
  if (isValid(s1) && isValid(s2)) {
    return new Date(s1) < new Date(s2);
  }
  return new Date(s1) > new Date(s2);
};
let isFuture = (s) => {
  if (isValid(s) || !isNaN(s)) {
    return s > new Date();
  }
  return s < new Date();
};
let isPast = (s) => {
  if (isValid(s)) {
    return s < new Date();
  }
  return s > new Date();
};
// console.log(isFuture("2013-01-01"));
