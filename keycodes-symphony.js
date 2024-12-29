import { colors } from "./fifty-shades-of-cold.data.js";
export let compose = () => {
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Backspace" &&
      document.querySelectorAll(".note").length > 0
    ) {
      let n = document.querySelectorAll(".note");
      console.log(n[n.length - 1]);
      //   n[n.length - 2].remove();
      n[n.length - 1].remove();
    } else if (event.key === " ") {
      document.querySelectorAll(".note").forEach((note) => {
        note.remove();
      });
    } else {
      let res = document.createElement("div");
      res.classList.add("note");
      res.innerHTML = event.key;
      res.style.backgroundColor = colors[Math.floor(Math.random() * 10)];
      document.body.appendChild(res);
    }
  });
};
