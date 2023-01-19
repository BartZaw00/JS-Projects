const formField = document.querySelector('[data-form]');
const inputField = document.querySelector('[data-input]');
const btnEdit = document.querySelectorAll('[data-edit]');
const btnDelete = document.querySelectorAll('[data-delete');



formField.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(inputField.value.match(/^[a-zA-Z]+$/));
    // if Not a Number, Not Empty
    if (inputField.value.match(/^[a-zA-Z]+$/)) {
        
    }
});