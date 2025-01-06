let interpolation = (obj) => {
  let stepdelay = obj.duration / obj.step; //2
  let stepgap = (obj.end - obj.start) / obj.step;
  let xANDy = [];
  let time;
  for (let i = obj.start; i < obj.end; i += stepgap) {
    let x = i;
    let y = stepdelay;
    xANDy.push([x, y]);
  }
  let hh = 0;

  time = setTimeout(() => {
    obj.callback(xANDy[hh]);
    hh++;
    if (hh === xANDy.length) {
      clearTimeout(time);
    }
  }, stepdelay);
};
