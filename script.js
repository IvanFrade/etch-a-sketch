function createDrawArea(squareNumber) {
    squareNumber = squareNumber > 100 ? 1000 : (squareNumber * squareNumber);
    const squareArray = [];
    
    for (let i = 0; i < squareNumber; i++) {
        let div = document.createElement("div");

        div.classList.add("drawing-square");
        let size = 600 / Math.sqrt(squareNumber);        
        div.style = `width: ${size}px; height: ${size}px;`;
        div.addEventListener("mouseenter", () => { 
            let r = 0;
            let g = 0;
            let b = 0;
            let a = 1;

            if (rainbowMode) {
                r = Math.floor(Math.random() * 255);
                g = Math.floor(Math.random() * 255);
                b = Math.floor(Math.random() * 255);
            }

            div.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;
        });

        squareArray.push(div);
    }

    gameArea.replaceChildren(...squareArray);
}

let gameArea = document.querySelector("#drawing-area");
let squareNumber = 16; // Default size is 16 * 16
let rainbowMode = false;

document.querySelector("#area-size-btn").addEventListener("click", () => {
    squareNumber = prompt("Input the number of squares per side (max.100)");
    createDrawArea(squareNumber);
});

document.querySelector("#clear-btn").addEventListener("click", () => {
    createDrawArea(squareNumber);
});

document.querySelector("#rainbow-btn").addEventListener("click", () => {
    console.log(rainbowMode);
    rainbowMode = rainbowMode ? false : true;
    console.log(rainbowMode);
    
});

createDrawArea(squareNumber);
