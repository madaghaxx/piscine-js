import { readFile } from "fs";
readFile(process.argv[2], "utf-8", (_, data) => {
    let file = data.split("\n");
    console.log(file);
    
});
