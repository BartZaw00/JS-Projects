const pencilSize = document.querySelector('[data-size]');
const minusSize = document.querySelector('[data-size-minus]');
const plusSize = document.querySelector('[data-size-plus]');

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