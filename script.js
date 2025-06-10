function createDrawArea(squareNumber) {
    for (let i = 0; i < squareNumber; i++) {
        let div = document.createElement("div");
        div.classList.add("drawing-square");
        gameArea.appendChild(div);
    }
}

let gameArea = document.querySelector("#drawing-area");
document.querySelector("#area-size-btn").addEventListener(() => {
    let squareNumber = 
});

createDrawArea(16);
