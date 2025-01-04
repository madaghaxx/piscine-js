export let createCircle = () => {
  document.body.addEventListener("mousedown", () => {
    let div = document.createElement("div");
    div.style.backgroundColor = "white";
    div.classList.add("circle");
    document.body.appendChild(div);
  });
};
export let moveCircle = () => {};
export let setBox = () => {};
