import { readdir, readFile } from "fs/promises";
import { join } from "path";

let arg = process.argv[2];
let files = await readdir(arg);

let res = [];
for (const ele of files) {
  if (ele.endsWith(".json")) {
    let filePath = join(arg, ele);
    let data = await readFile(filePath, "utf8");
    let ff = JSON.parse(data);
      res.push(ff);
  }
}

let gg =res.filter((a) => {
   console.log(Object.values(a)[0])
});
console.log(gg);

