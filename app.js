let button = document.getElementById('button');
let canvas = document.getElementById('canvas');

let colors = ['red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow'];

button.addEventListener('click', () => {
    let index = parseInt((Math.random()*colors.length)+1);
    canvas.style.background = `${colors[index]}` 
})