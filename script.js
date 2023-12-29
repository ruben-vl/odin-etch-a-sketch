function createGrid(dim) {
    existing_children = document.querySelector("sketch-grid > div");
    for (child in existing_children) {
        sketch_grid.removeChild(child)
    }
    for (let i = 0; i < dim; i++) {
        for (let j = 0; j < dim; j++) {
            const div = document.createElement('div');
            div.style.width = `${100/dim}%`;
            div.style.height = "auto";
            div.style.maxWidth = `${80/dim}vw`;
            div.style.maxHeight = `${70/dim}vh`;

            div.addEventListener('mouseover', (e) => {
                if (e.buttons == 1) {
                    e.target.classList.toggle("black-background");
                }
            });
            div.addEventListener('click', (e) => {
                e.target.classList.toggle("black-background");
            })
            sketch_grid.appendChild(div);
        }
    }
}

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

let primaryMouseButtonDown = false;

function setPrimaryButtonState(e) {
  var flags = e.buttons !== undefined ? e.buttons : e.which;
  primaryMouseButtonDown = (flags & 1) === 1;
}

document.addEventListener("mousedown", setPrimaryButtonState);
document.addEventListener("mousemove", setPrimaryButtonState);
document.addEventListener("mouseup", setPrimaryButtonState);

createGrid(grid_dimension);

