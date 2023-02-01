const toDo = document.querySelector('[data-to-do]');

const completed = document.querySelector('[data-completed]');

const btnMore = document.querySelector('[data-btn-more]')

const btnAdd = document.getElementById('btn-add');

const dropdownMenu = document.querySelector('[data-dropdown-menu]');


btnMore.addEventListener('click', () => {
    btnMore.classList.toggle('icon-border');
    dropdownMenu.classList.toggle('active');
    
});

btnAdd.addEventListener('click', () => {

});