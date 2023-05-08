// set DOM variables
const grid = document.querySelector(".grid")
const gridBtn = document.querySelector(".gridBtn")

drawGrid(16)

// Change the color of targeted div
function colorBox(cursor) {
    cursor.target.style.backgroundColor = "black";
}

function drawGrid(size){
    grid.textContent = ''
    grid.style.gridTemplateColumns = `repeat(${size} , 1fr)`
    grid.style.gridTemplateRows = `repeat(${size} , 1fr)`
        for(let i = 0; i < size * size; i++){
            let div = document.createElement('div')
            div.addEventListener("mouseover", colorBox)
            div.setAttribute('class', 'box')
            grid.appendChild(div)
        }
}

function newGrid(size) {
    size = prompt("Please enter a new grid size between 10 and 100.")
    if (size < 10 || size > 100 || typeof size != 'number') {
        alert("Out of range.")
    }
    else if (size >= 10 && size <= 100) {
    drawGrid(size)
    }
}

const box = document.querySelectorAll(".box")

// Add mouseover event for all divs
// for (let i = 0; i < box.length; i++) {
//     box[i].addEventListener('mouseover', colorBox)
// }

gridBtn.addEventListener("click", newGrid)