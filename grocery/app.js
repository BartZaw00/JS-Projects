const formField = document.querySelector('[data-form]');
const inputField = document.querySelector('[data-input]');
const list = document.querySelector('[data-list]');
const clear = document.querySelector('[data-clear]');

let btnsEdit = '';
let btnsDelete = '';
let tempInput = '';

formField.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(inputField.value.match(/^\S*[a-zA-Z\s]\S*$/));
    // Only Alphabet Characters + spaces only between them, Not Empty
    if (inputField.value.match(/^\S*[a-zA-Z\s]\S*$/)) {
        if (clear.classList.contains('display-none')) clear.classList.remove('display-none');

        list.innerHTML += `<li><span>${inputField.value}</span><div><button data-edit class="list-button edit">Edit</button><button data-delete class="list-button delete">Delete</button></div>
        </li>`;
        btnsEdit = document.querySelectorAll('[data-edit]');
        btnsDelete = document.querySelectorAll('[data-delete]');
        inputField.value = '';

        list.addEventListener('click', (event) => {
            if (event.target.classList.contains('edit')) {
                let li = event.target.parentNode.parentNode;
                let span = li.childNodes[0];
                let div = li.childNodes[1];
                let input = document.createElement('input');
                input.classList.add('edit-input');
                let saveBtn = document.createElement('button');
                saveBtn.classList.add('list-button');
                saveBtn.textContent = 'Save';
                input.value = span.textContent;
                li.replaceChild(input, span);
                li.replaceChild(saveBtn, div);
            }
        });

        list.addEventListener('click', (event) => {
            if (event.target.classList.contains('delete')) {
                let li = event.target.parentNode.parentNode;
                li.remove();
                if (!list.children.length) clear.classList.add('display-none');
            }
        });
    }
});

clear.addEventListener('click', () => {
    if (!clear.classList.contains('display-none')) clear.classList.add('display-none');
    list.innerHTML = ``;
});