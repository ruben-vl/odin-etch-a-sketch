let window_width = window.innerWidth;
let window_height = window.innerHeight;

const title_div = document.querySelector("#title-div");
const playing_field = document.querySelector("#playing-field");
const controls = document.querySelector("#controls");
const sketch_grid = document.querySelector("#sketch-grid");

if (0.7*window_height < 0.8*window_width) {
    sketch_grid.style.height = "70vh";
    sketch_grid.style.width = "auto";
} else {
    sketch_grid.style.width = "80vw";
    sketch_grid.style.height = "auto";
}

let grid_dimension = 16;
createGrid(grid_dimension);

const new_grid_button = document.querySelector("#newgrid");

new_grid_button.addEventListener('click', (e) => {
    let gridSize = parseInt(prompt("New Grid Size ([1,100]):"));
    if (gridSize != NaN && gridSize >= 1 && gridSize <= 100) {
        createGrid(gridSize);
    } else {
        alert("Not a valid grid size. The size needs to be between 1 and 100, both inclusive.");
    }
})

function createGrid(dim) {
    existing_children = document.querySelector("sketch-grid > div");
    for (child in existing_children) {
        sketch_grid.removeChild(child);
    }
    for (let i = 0; i < dim; i++) {
        for (let j = 0; j < dim; j++) {
            const div = document.createElement('div');
            div.style.width = `${100/dim}%`;
            div.style.height = "auto";
            div.style.maxWidth = `${80/dim}vw`;
            div.style.maxHeight = `${70/dim}vh`;

            div.addEventListener('mouseover', (e) => {
                e.target.classList.toggle("black-background");
            });
            sketch_grid.appendChild(div);
        }
    }
}

