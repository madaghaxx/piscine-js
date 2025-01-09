import fs from "fs/promises";
let filename = process.argv[2];
let option = process.argv[3];
let resfile = process.argv[4];

let code = async (file, resfile) => {
  try {
    const data = await fs.readFile(file, "utf8");
    const buff = Buffer.from(data);
    await fs.writeFile(resfile, buff.toString("base64"));
  } catch (err) {
    console.error(err);
  }
};

let decode = async (file, resfile) => {
  try {
    const data = await fs.readFile(file, "utf8");
    const buff = Buffer.from(data, "base64");
    await fs.writeFile(resfile, buff.toString());
  } catch (err) {
    console.error(err);
  }
};

if (option == "encode" && resfile) {
  code(filename, resfile);
}
if (option == "encode" && !resfile) {
  code(filename, "cypher.txt");
}
if (option == "decode" && resfile) {
  decode(filename, resfile);
}
if (option == "decode" && !resfile) {
  decode(filename, "clear.txt");
}
