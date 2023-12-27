function createGrid(dim, cell_width) {
    // TODO: remove existing children
    for (let i = 0; i < dim; i++) {
        for (let j = 0; j < dim; j++) {
            const div = document.createElement('div');
            div.style.width = `${cell_width-2}px`;
            div.style.height = `${cell_width-2}px`;
            sketch_grid.appendChild(div);
        }
    }
}

let window_width = window.innerWidth;
let window_height = window.innerHeight;

const title_div = document.querySelector("#title-div");
title_div.style.height = `${0.19*window_height}px`;

const playing_field = document.querySelector("#playing-field");
playing_field.style.height = `${0.79*window_height}px`;
playing_field.style.width = "100%";

const controls = document.querySelector("#controls");
const sketch_grid = document.querySelector("#sketch-grid");

let sketch_grid_size = window_width > window_height
    ? Math.min(4/5*0.79*window_height, 4/9*window_width)
    : Math.min(4/5*window_width, 4/9*0.79*window_height);

sketch_grid.style.width = `${sketch_grid_size}px`;
sketch_grid.style.height = `${sketch_grid_size}px`;

controls.style.width = `${sketch_grid_size}px`;
controls.style.height = `${sketch_grid_size}px`;

let grid_dimension = 16;

createGrid(grid_dimension, sketch_grid_size / 16);

