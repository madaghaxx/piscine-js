let arg = process.argv[2];
let revstr = (str) => {
  let arghalf1 = str.slice(0, Math.ceil(str.length / 2));
  let arghalf2 = str.slice(Math.ceil(str.length / 2));
  return arghalf2 + arghalf1;
};
let temp= ''
 arg.split(" ").forEach((i) => {
  temp += revstr(i)+' '
});
console.log(temp);

