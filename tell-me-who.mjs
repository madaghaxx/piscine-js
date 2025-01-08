import { readdir } from "node:fs/promises";
let arg = process.argv[2];
let files = await readdir(arg);
for (let i = 0; i < files.length; i++) {
  const sortedName = files[i]
    .split(".")[0]
    .split("_")
    .sort((a, b) => {
      return a[0].localeCompare(b[0]);
    })
    .join(" ");
  console.log(`${i + 1}. ${sortedName}`);
}
