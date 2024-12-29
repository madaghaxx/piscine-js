import { styles } from "./pimp-my-style.data.js";
let styleIndex = 0;
export const pimp = () => {
  const btn = document.querySelector("button");
  if (!btn) return;

  // console.log(btn.classList.value.split(" "));
  if (
    !btn.classList.contains("unpimp") &&
    btn.classList.value.split(" ").length < 16
  ) {
    btn.classList.add(styles[styleIndex]);
    styleIndex += 1;
    if (btn.classList.value.split(" ").length === 16) {
      btn.classList.toggle("unpimp");
    }
  } else if (btn.classList.contains("unpimp")) {
    styleIndex -= 1;
    btn.classList.remove(styles[styleIndex]);
    if (styleIndex === 0) {
      btn.classList.toggle("unpimp");
    } else {
      styleIndex -= 1;
    }
  }
};
