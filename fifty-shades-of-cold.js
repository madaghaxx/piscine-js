import { colors } from "./fifty-shades-of-cold.data.js";
export let generateClasses = () => {
  let style = document.createElement("style");
  document.head.appendChild(style);
  for (let i = 0; i < colors.length; i++) {
    style.sheet.insertRule(`.${colors[i]} { background: ${colors[i]}; }`);
    // const classes = style;
  }
};

export let generateColdShades = () => {
  for (let i = 0; i < colors.length; i++) {
    if (
      colors[i].includes("aqua") ||
      colors[i].includes("blue") ||
      colors[i].includes("turquoise") ||
      colors[i].includes("green") ||
      colors[i].includes("cyan") ||
      colors[i].includes("navy") ||
      colors[i].includes("purple")
    ) {
      let div = document.createElement("div");
      div.innerHTML = colors[i];
      div.className = colors[i];
      // console.log(div.className);

      document.body.appendChild(div);
    }
  }
};
export let choseShade = (hh) => {
  let divs = document.querySelectorAll("div");
  divs.forEach((div) => {
    div.style.backgroundColor = hh;
  });
};
