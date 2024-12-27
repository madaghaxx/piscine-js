let filterShortStateName = (arr) => {
  return arr.filter((str) => str.length < 7);
};

let filterStartVowel = (arr) => {
  return arr.filter((str) => str[0].match(/[aeiou]/gi));
};

let filter5Vowels = (arr) => {
  return arr.filter((str) => (str.match(/[aeiou]/g) || []).length >= 5);
};

let filter1DistinctVowel = (arr) => {
  return arr.filter((str) => {
    str = str.toLowerCase();
    let vowels = str.match(/[aeiou]/gi) || [];
    return new Set(vowels).size == 1;
  });
};

let multiFilter = (arr) => {
  return arr.filter((obj) => {
    return (
      obj.capital &&
      obj.capital.length >= 8 &&
      obj.name &&
      obj.name[0].match(/[aeiou]/gi) === null &&
      obj.tag &&
      (obj.tag.match(/[aeiou]/gi) || []).length !== 0 &&
      obj.region !== "South"
    );
  });
};

// console.log(
//   multiFilter([
//     { capital: "Sacramento", name: "California", region: "West", tag: "CA" },
//     { capital: "Honolulu", name: "Hawaii", region: "West", tag: "HI" },
//     {
//       capital: "Jefferson City",
//       name: "Missouri",
//       region: "Midwest",
//       tag: "MO",
//     },
//     {
//       capital: "Harrisburg",
//       name: "Pennsylvania",
//       region: "Northeast",
//       tag: "PA",
//     },
//     {
//       capital: "Providence",
//       name: "Rhode Island",
//       region: "Northeast",
//       tag: "RI",
//     },
//   ])
// );
