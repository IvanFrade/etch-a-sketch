function createDrawArea(squareNumber) {
    // Cap number of squares per size to 100 and calculate total number of squares
    squareNumber = squareNumber > 100 ? 1000 : (squareNumber * squareNumber);
    const squareArray = [];
    
    for (let i = 0; i < squareNumber; i++) {
        let div = document.createElement("div");

        // Set square size to a fraction of total size and disable shrink
        let size = DRAWING_AREA_SIDE_SIZE / Math.sqrt(squareNumber);        
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.flexShrink = 0;


        div.addEventListener("mouseenter", () => { 
            let r = 0, g = 0, b = 0;    // Default to black color
            alpha += 0.1;

            if (rainbowMode) {
                r = Math.floor(Math.random() * 255);
                g = Math.floor(Math.random() * 255);
                b = Math.floor(Math.random() * 255);
            }

            div.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        });

        squareArray.push(div);
    }

    gameArea.replaceChildren(...squareArray);
}

const DRAWING_AREA_SIDE_SIZE = 600;

const gameArea = document.querySelector("#drawing-area");
let squareNumber = 16; // Default size is 16 * 16
let rainbowMode = false;
let alpha = 0;

document.querySelector("#area-size-btn").addEventListener("click", () => {
    squareNumber = prompt("Input the number of squares per side (max.100)");
    createDrawArea(squareNumber);
});

document.querySelector("#clear-btn").addEventListener("click", () => {
    alpha = 0;
    createDrawArea(squareNumber);
});

document.querySelector("#rainbow-btn").addEventListener("click", () => {
    console.log(rainbowMode);
    rainbowMode = rainbowMode ? false : true;
    console.log(rainbowMode);
    
});

createDrawArea(squareNumber);
