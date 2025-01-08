import { readdir } from "node:fs/promises";
let arg = process.argv[2];
let files = await readdir(arg);
for (let i = 0; i < files.length; i++) {
    const sortedName = files[i]
        .split(".")[0] 
        .split("_")
        .sort((a, b) => {
            const A = a.split("_")[0];
            const B = b.split("_")[1];
            return A.localeCompare(B);
        })
        .join(" ");
    console.log(`${i + 1}. ${sortedName}`);
}
