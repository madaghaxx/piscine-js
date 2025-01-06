let interpolation = (obj) => {
  let stepdelay = obj.duration / obj.step; //2
  let stepgap = (obj.end - obj.start) / obj.step;
  let xANDy = [];
  let time;
  let hhh = 1
  for (let i = obj.start; i < obj.end; i += stepgap) {
      let x = i;
      let y = stepdelay * hhh;
      xANDy.push([x, y]);
      hhh++;
}
let hh = 0;

  time = setInterval(() => {
    obj.callback(xANDy[hh]);
    hh++;
    if (hh === xANDy.length) {
      clearInterval(time);
    }
  }, stepdelay);
};
