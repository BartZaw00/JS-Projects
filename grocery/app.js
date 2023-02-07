// query selectors
const formField = document.querySelector('[data-form]');
const inputField = document.querySelector('[data-input]');
const list = document.querySelector('[data-list]');
const clear = document.querySelector('[data-clear]');

// form field event listener variables
let btnsEdit;
let btnsDelete;
let tempInput;

// list event listener variables
let editBtn;
let saveBtn;


formField.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(inputField.value.match(/^\S*[a-zA-Z\s]\S*$/));
    // Only Alphabet Characters + spaces only between them, Not Empty
    if (inputField.value.match(/^\S*[a-zA-Z\s]\S*$/)) {
        if (clear.classList.contains('display-none'))
            clear.classList.remove('display-none');

        list.innerHTML += `<li><span>${inputField.value}</span><div><button data-edit class="list-button edit">Edit</button><button data-delete class="list-button delete">Delete</button></div>
        </li>`;
        btnsEdit = document.querySelectorAll('[data-edit]');
        btnsDelete = document.querySelectorAll('[data-delete]');
        inputField.value = '';
    }

    Array.from(list.children).forEach((listItem) => {
        listItem.addEventListener('click', (event) => {
            if (event.target.classList.contains('edit')) {
                for (let i = 0; i < list.children.length; i++) {
                    if (list.children[i].children[1].children[0].classList.contains('save')) {
                        inputToSpan(list.children[i]);
                        saveToEdit(list.children[i].children[1].children[0]);
                    }
                }
                spanToInput(event.target.parentNode.parentNode);
                editToSave(event.target)
            }
            else if (event.target.classList.contains('save')) {
                inputToSpan(event.target.parentNode.parentNode)
                saveToEdit(event.target);
            }
            else if (event.target.classList.contains('delete')) {
                const li = event.target.parentNode.parentNode;
                li.remove();
                if (list.children.length === 0)
                    clear.classList.add('display-none');
            }
        });
    });
});



function spanToInput(listElement) {
    const inputElement = document.createElement('input');
    inputElement.classList.add('edit-input');
    inputElement.value = listElement.children[0].textContent;
    listElement.replaceChild(inputElement, listElement.children[0]);
}

function inputToSpan(listElement) {
    const spanElement = document.createElement('span');
    spanElement.textContent = listElement.children[0].value;
    listElement.replaceChild(spanElement, listElement.children[0]);
}

function saveToEdit(element) {
    element.classList.remove('save');
    element.classList.add('edit');
    element.textContent = 'Edit';
}

function editToSave(element) {
    element.classList.remove('edit');
    element.classList.add('save');
    element.textContent = 'Save';
}

clear.addEventListener('click', () => {
    if (!clear.classList.contains('display-none')) clear.classList.add('display-none');
    list.innerHTML = ``;
});

