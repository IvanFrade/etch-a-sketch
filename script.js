function createDrawArea(squareNumber) {
    const squareArray = [];
    
    for (let i = 0; i < squareNumber; i++) {
        let div = document.createElement("div");
        div.classList.add("drawing-square");
        squareArray.push(div);
    }

    gameArea.replaceChildren(...squareArray);
}

let gameArea = document.querySelector("#drawing-area");

document.querySelector("#area-size-btn").addEventListener("click", () => {
    let squareNumber = prompt("Insert new square number");
    gameArea.child
    createDrawArea(squareNumber);
});

createDrawArea(16);
