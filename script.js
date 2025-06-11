function createDrawArea(squareNumber) {
    squareNumber = squareNumber > 100 ? 1000 : (squareNumber * squareNumber);
    const squareArray = [];
    
    for (let i = 0; i < squareNumber; i++) {
        let div = document.createElement("div");

        div.classList.add("drawing-square");
        let size = 600 / Math.sqrt(squareNumber);        
        div.style = `width: ${size}px; height: ${size}px;`;
        div.addEventListener("mouseenter", () => { 
            div.style.backgroundColor = "rgba(0, 0, 0, 1)";

            // If random color mode is on
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            div.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;
        });

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
