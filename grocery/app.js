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
let li;
let currentLi;
let span;
let editBtn;
let input;
let saveBtn;

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
    }
});

list.addEventListener('click', (event) => {
    console.log(event.target)

    let listChildren = list.children;

    for (let i = 0; i < list.children.length; i++) {
        if (listChildren[i].children[1].children[0].classList.contains('save')) {
            listChildren[i].children[1].children[0].classList.remove('save');
            listChildren[i].children[1].children[0].classList.add('edit');
            listChildren[i].children[1].children[0].textContent = 'Edit';
            listChildren[i].children[0].textContent = input.value;
            listChildren[i].children[0].replaceChild(span, input);
        }
    }
    if (event.target.classList.contains('edit')) {
        console.log('EDIT')
        li = event.target.parentNode.parentNode;
        span = li.childNodes[0];
        editBtn = li.childNodes[1].childNodes[0];
        input = document.createElement('input');
        input.classList.add('edit-input');
        editBtn.classList.remove('edit');
        editBtn.classList.add('save');
        editBtn.textContent = 'Save';
        input.value = span.textContent;
        li.replaceChild(input, span);
    }
    else if (event.target.classList.contains('save')) {
        li = event.target.parentNode.parentNode;
        input = li.childNodes[0];
        editBtn = li.childNodes[1].childNodes[0];
        editBtn.classList.remove('save');
        editBtn.classList.add('edit');
        editBtn.textContent = 'Edit';
        console.log(editBtn)
        span.textContent = input.value;
        li.replaceChild(span, input);
    }
    else if (event.target.classList.contains('delete')) {
        console.log('DELETE')
        li = event.target.parentNode.parentNode;
        li.remove();
        if (!list.children.length) clear.classList.add('display-none');
    }
});

clear.addEventListener('click', () => {
    if (!clear.classList.contains('display-none')) clear.classList.add('display-none');
    list.innerHTML = ``;
});

