let gameArea = document.querySelector("#drawing-area");

for (let i = 0; i < 16; i++) {
    let div = document.createElement("div");
    div.textContent = i;
    gameArea.appendChild(div);
}