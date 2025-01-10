import fs from "fs/promises";
import { join } from "path";
let arg = process.argv[2];
let files = await fs.readdir(arg);
let vipList = [];
for (let i = 0; i < files.length; i++) {
  if (files[i].endsWith(".json")) {
    let filePath = arg+files[i]
    let data = await fs.readFile(filePath, "utf8");
    let ff = JSON.parse(data);
    if (Object.values(ff)[0] == "yes") {
      let names = files[i].split(".")[0];
      let name = names.split("_")[0];
      let lastname = names.split("_")[1];
      vipList.push({ lastname, name });
    }
  }
}
vipList.sort((a, b) => a.lastname.localeCompare(b.lastname));
let text = vipList
  .map((vip, index) => `${index + 1}. ${vip.lastname} ${vip.name}`)
  .join("\n");
await fs.writeFile("vip.txt", text);
