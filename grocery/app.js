const formField = document.querySelector('[data-form]');
const inputField = document.querySelector('[data-input]');
const btnEdit = document.querySelectorAll('[data-edit]');
const btnDelete = document.querySelectorAll('[data-delete');



formField.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(inputField.value.match(/^\S*[a-zA-Z\s]\S*$/));
    // Only Alphabet Characters + spaces only between them, Not Empty
    if (inputField.value.match(/^\S*[a-zA-Z\s]\S*$/)) {
        
    }
});