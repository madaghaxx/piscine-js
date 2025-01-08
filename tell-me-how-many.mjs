import { readdir } from "node:fs/promises";
let arg = process.argv[2];
let files = await readdir(arg);
console.log(files.length);
