export let build = (num) => {
  for (let i = 0; i < num; i++) {
    let div = document.createElement("div");
    div.id = "brick-" + i;
    if (i % 3 === 1) {
      div.setAttribute("data-foundation", "true");
    }
    setTimeout(() => {
      document.body.append(div);
    }, i * 100);
  }
};
export let repair = (...num) => {
  num.forEach((el) => {
    let hh = document.getElementById(el);
    if (hh.getAttribute("data-foundation") === "true") {
      hh.setAttribute("data-repaired", "in progress");
    } else {
      hh.setAttribute("data-repaired", "true");
    }
  });
};

export let destroy = () => {
  let diz = document.getElementsByTagName("div");
  let hhhh = diz[diz.length - 1];
  hhhh.remove();
};
