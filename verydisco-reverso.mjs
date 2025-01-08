import fs from "fs";
const revstr = (data) => {
  let arghalf1 = data.slice(0, Math.floor(data.length / 2));
  let arghalf2 = data.slice(Math.floor(data.length / 2));
  return arghalf2 + arghalf1;
};

fs.readFile(process.argv[2], "utf-8", (_, data) => {
  let temp = "";
  data.split(/\s+/).forEach((i) => {
    temp += revstr(i) + " ";
  });
  console.log(temp.trim());
});
