import { readdir } from "node:fs/promises";
let arg = process.argv[2];
let files = await readdir(arg);
files.sort((a, b) => {
  const secondElemA = a.split("_")[0];
  const secondElemB = b.split("_")[1];
  return secondElemA.localeCompare(secondElemB);
});
for (let i = 0; i < files.length; i++) {
  const sortedName = files[i].split("_").join(" ");
  console.log(`${i + 1}. ${sortedName}`);
}
