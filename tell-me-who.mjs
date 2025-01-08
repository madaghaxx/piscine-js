import { readdir } from "node:fs/promises";

async function main() {
  let arg = process.argv[2];
  let files = await readdir(arg);
  let data = files.sort((a, b) => {
    let A = a.split("_")[0];
    let B = b.split("_")[0];
    return !A.localeCompare(B);
  });
  for (let i = 1; i <= files.length; i++) {
    console.log(i, data[i - 1].split(".")[0].split("_")[0]);
  }
}

main().catch(console.error);
