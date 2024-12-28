export let generateLetters = () => {
  let size = 11;
  for (let i = 0; i < 120; i++) {
    let letter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    let div = document.createElement("div");
    div.innerHTML = letter;
    document.body.appendChild(div);
    div.style.fontSize = size + "px";
    if (i < 40) {
      div.style.fontWeight = 300;
    }
    if (i > 40 && i < 80) {
      div.style.fontWeight = 400;
    }
    if (i > 80) {
      div.style.fontWeight = 600;
    }
    size++;
  }
};
