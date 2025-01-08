import { readdir } from "node:fs/promises";
let arg = process.argv[2];
let files = await readdir(arg);
for (let i = 1; i <= files.length; i++) {
  console.log(i+".", files[i-1].split("_").join('\n'));
}
