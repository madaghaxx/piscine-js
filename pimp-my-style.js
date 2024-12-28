import { styles } from "./pimp-my-style.data.js";
export let pimp = () => {
  const btn = document.querySelector("button");

  if (
    !btn.classList.contains("unpimp") &&
    btn.classList.value.split(" ").length >= 1 &&
    btn.classList.value.split(" ").length < 16
  ) {
    let num = btn.classList.value.split(" ").length - 1;
    btn.classList.add(styles[num]);
  } else if (btn.classList.value.split(" ").length === 16) {
    btn.classList.toggle("unpimp");
  }

  if (btn.classList.value.contains("unpimp")) {
    {
      let num = btn.classList.value.split(" ").length - 1;
      btn.classList.remove(styles[num]);
    }
  }
};


// helo helo (cap) hhh(cap, 3)
// helo Helo hhh (cap, 3)
// Helo Helo Hhh
hh (cap) (low) 