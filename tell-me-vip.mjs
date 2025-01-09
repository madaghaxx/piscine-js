import { readdir, readFile } from "fs/promises";
import { join } from "path";

let arg = process.argv[2];
let files = await readdir(arg);

for (let i = 0; i < files.length; i++) {
  if (files[i].endsWith(".json")) {
    let filePath = join(arg, files[i]);
    let data = await readFile(filePath, "utf8");
    let ff = JSON.parse(data);
    if (Object.values(ff)[0] == "yes") {
      let names = files[i].split(".")[0];
      let name = names.split("_")[0];
      let lastname = names.split("_")[1];
      console.log(`${i + 1}. ${[lastname, name].join(" ")}`);
    }
  }
}
