import { readdir } from "fs/promises";
import http from "http";

let dir = await readdir(process.argv[2]);
http
  .createServer(function (_, res) {
    res.write("Hello World!");
    res.end();
  })
  .listen(5000);
