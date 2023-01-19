const formField = document.querySelector('[data-form]');
const inputField = document.querySelector('[data-input]');
const list = document.querySelector('[data-list]');
const clear = document.querySelector('[data-clear]');

let btnsEdit = '';
let btnsDelete = '';

formField.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(inputField.value.match(/^\S*[a-zA-Z\s]\S*$/));
    // Only Alphabet Characters + spaces only between them, Not Empty
    if (inputField.value.match(/^\S*[a-zA-Z\s]\S*$/)) {
        if (clear.classList.contains('display-none')) clear.classList.remove('display-none');

        list.innerHTML += `<li>${inputField.value}<div><button data-edit class="list-button edit">Edit</button><button data-delete class="list-button delete">Delete</button></div>
        </li>`;
        btnsEdit = document.querySelectorAll('[data-edit]');
        btnsDelete = document.querySelectorAll('[data-delete]');
        inputField.value = '';
        btnsDelete.forEach(element => {
            element.addEventListener('click', (item) => {
                item.target.parentNode.parentNode.remove();
                if(!list.children.length) clear.classList.add('display-none');
            });
            
        });
    }
});

clear.addEventListener('click', () => {
    if (!clear.classList.contains('display-none')) clear.classList.add('display-none');
    list.innerHTML = ``;
});




