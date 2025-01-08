import { readdir } from "node:fs/promises";
let test = [
  "Ubaid_Ballard.json",
  "Victoria_Chan.json",
  "Dominika_Mullen.json",
  "Heath_Denton.json",
  `HAHA_Hamilton.json`,
];
let arg = process.argv[2];
let files = await readdir(arg);
// console.log(files);
let data = files.sort((a, b) => {
  let A = a.split("_")[0];
  let B = b.split("_")[0];
  return A.localeCompare(B);
});
for (let i = 1; i <= files.length; i++) {
    console.log(i, data[i - 1]);
}
