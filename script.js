function createDrawArea(squareNumber) {
    squareNumber = squareNumber > 100 ? 1000 : (squareNumber * squareNumber);
    const squareArray = [];
    
    for (let i = 0; i < squareNumber; i++) {
        let div = document.createElement("div");

        div.classList.add("drawing-square");
        let size = 600 / Math.sqrt(squareNumber);        
        div.style = `width: ${size}px; height: ${size}px;`;
        div.addEventListener("mouseenter", () => { div.classList = "colored"});

        squareArray.push(div);
    }

    gameArea.replaceChildren(...squareArray);
}

let gameArea = document.querySelector("#drawing-area");
let squareNumber = 16; // Default size is 16 * 16

document.querySelector("#area-size-btn").addEventListener("click", () => {
    squareNumber = prompt("Input the number of squares per side (max.100)");
    createDrawArea(squareNumber);
});

document.querySelector("#clear-btn").addEventListener("click", () => {
    createDrawArea(squareNumber);
});

createDrawArea(squareNumber);
