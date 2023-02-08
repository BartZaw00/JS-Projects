const pencilSize = document.querySelector('[data-size]');
const minusSize = document.querySelector('[data-size-minus]');
const plusSize = document.querySelector('[data-size-plus]');

const colors = document.querySelectorAll('[data-colors]');

const drawingArea = document.getElementById('canvas');
const ctx = drawingArea.getContext('2d');

let isDrawing = false;

minusSize.addEventListener('click', () => {
    if (Number(pencilSize.textContent) === 1)
        return;
    pencilSize.textContent--;
});

plusSize.addEventListener('click', () => {
    if (Number(pencilSize.textContent) === 10)
        return;
    pencilSize.textContent++;
});

drawingArea.addEventListener('mousedown', startDrawing);

drawingArea.addEventListener('mousemove', draw);

drawingArea.addEventListener('mouseup', stopDrawing);

colors.forEach((color) => {
    color.addEventListener('click', (event) => {
        if (event.target.classList.contains('black'))
            ctx.fillStyle = 'black';
        if (event.target.classList.contains('brown'))
            ctx.fillStyle = 'brown';
        if (event.target.classList.contains('grey'))
            ctx.fillStyle = 'grey';
        if (event.target.classList.contains('purple'))
            ctx.fillStyle = 'purple';
        if (event.target.classList.contains('pink'))
            ctx.fillStyle = 'pink';
        if (event.target.classList.contains('red'))
            ctx.fillStyle = 'red';
        if (event.target.classList.contains('green'))
            ctx.fillStyle = 'green';
        if (event.target.classList.contains('blue'))
            ctx.fillStyle = 'blue';
        if (event.target.classList.contains('orange'))
            ctx.fillStyle = 'orange';
        if (event.target.classList.contains('yellow'))
            ctx.fillStyle = 'yellow';
        if (event.target.classList.contains('white'))
            ctx.fillStyle = 'white';

    });
});


function startDrawing(e) {

    console.log(e); //logs MouseEvent
    isDrawing = true;

    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, Number(pencilSize.textContent) * 5, 0, 2 * Math.PI);
    ctx.fill();
}

function draw(e) {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, Number(pencilSize.textContent) * 5, 0, 2 * Math.PI);
    ctx.fill();
}

function stopDrawing() {
    isDrawing = false;
}