import { readdir } from "node:fs/promises";

async function main() {
  let arg = process.argv[2];
  let files = await readdir(arg);

  let ff = files.map((file) => {
    return file.split(".")[0];
  });

  ff.sort((a, b) => {
    let A = a.split("_")[1];
    let B = b.split("_")[1];
    return A.localeCompare(B);
  });

  ff.forEach((ele, i) => {
    let test = ele.split("_");
    let first = test[0];
    let last = test[1];

    console.log(`${i + 1}. ${[last, first].join(" ")}`);
  });
}

main();
