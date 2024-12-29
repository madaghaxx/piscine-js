import { colors } from "./fifty-shades-of-cold.data.js";
export let generateClasses = () => {
  let tag = document.head.appendChild(document.createElement("style"));
  for (let i = 0; i < colors.length; i++) {
    tag.sheet.insertRule(`.${colors[i]} { background: ${colors[i]}; }`);
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
      document.body.appendChild(div);
    }
  }
};
export let choseShade = () => {
  if (event.target.tagName === "DIV") {
    let selectedColor = event.target.textContent;
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => {
      div.style.backgroundColor = selectedColor;
    });
  }
};
