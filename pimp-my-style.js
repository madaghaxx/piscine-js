import { styles } from "./pimp-my-style.data.js";
let num = 0;
export let pimp = () => {
  const btn = document.querySelector("button");

  // console.log(btn.classList.value.split(" "));
  if (
    !btn.classList.contains("unpimp") &&
    btn.classList.value.split(" ").length < 16
  ) {
    btn.classList.add(styles[num]);
    num += 1;
    if (btn.classList.value.split(" ").length === 16) {
      btn.classList.toggle("unpimp");
    }
  } else if (btn.classList.contains("unpimp")) {
    btn.classList.remove(styles[num]);
    if (num === 0) {
      btn.classList.toggle("unpimp");
    } else {
      num -= 1;
    }
  }
};
// a === 1 ?? b;