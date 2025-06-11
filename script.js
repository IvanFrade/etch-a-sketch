function createDrawArea(squareNumber) {
    const squareArray = [];
    
    for (let i = 0; i < squareNumber; i++) {
        let div = document.createElement("div");
        div.classList.add("drawing-square");
        let size = 600 / Math.sqrt(squareNumber);
        div.style = `width: ${size}px; height: ${size}px;`;
        squareArray.push(div);
    }

    gameArea.replaceChildren(...squareArray);
}

let gameArea = document.querySelector("#drawing-area");

document.querySelector("#area-size-btn").addEventListener("click", () => {
    let squareNumber = prompt("Insert new square number");
    gameArea.child
    createDrawArea(squareNumber * squareNumber);
});

createDrawArea(16);
