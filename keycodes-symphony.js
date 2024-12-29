// import { colors } from "./fifty-shades-of-cold.data.js";s
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
    } else if (event.key === "Escape") {
      document.querySelectorAll(".note").forEach((note) => {
        note.remove();
      });
    } else {
      let res = document.createElement("div");
      res.classList.add("note");
      res.innerHTML = event.key;
      let ra = Math.floor(Math.random() * 255);
      let ra2 = Math.floor(Math.random() * 255);
      let ra3 = Math.floor(Math.random() * 255);
      res.style.backgroundColor = `rgb(${ra}, ${ra2}, ${ra3})`;

      document.body.appendChild(res);
    }
  });
};
