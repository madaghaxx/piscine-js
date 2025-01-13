export let createCircle = () => {
  document.body.addEventListener("mousedown", (e) => {
    let div = document.createElement("div");
    var rect = { left: e.clientX, top: e.clientY };
    div.classList.add("circle");
    div.style.left = rect.left - 25 + "px";
    div.style.top = rect.top - 25 + "px";
    div.style.background = "white";
    document.body.appendChild(div);
  });
};
export let moveCircle = () => {
  addEventListener("mousemove", (e) => {
    let circle = document.querySelectorAll(".circle");

    if (circle.length > 0) {
      var rect = { left: e.clientX, top: e.clientY };
      const { style } = circle[circle.length - 1];
      style.top = rect.top - 25 + "px";
      style.left = rect.left - 25 + "px";
    }
  });
};
export let setBox = () => {
  let box = document.createElement("div");

  box.classList.add("box");
  document.body.append(box);
  addEventListener("mousemove", (e) => {
    let circle = document.querySelectorAll(".circle");
    let boxPosition = box.getBoundingClientRect();
    if (circle.length > 0) {
      let last = circle[circle.length - 1];
      if (
        e.clientX > boxPosition.left + 26 &&
        e.clientX < boxPosition.right - 26 &&
        e.clientY > boxPosition.top + 26 &&
        e.clientY < boxPosition.bottom - 26
      ) {
        last.style.background = "purple";
      }
    }
  });
};
