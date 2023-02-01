const toDo = document.querySelector('[data-to-do]');

const toDoElements = document.getElementsByClassName('gg-radio-check');

const completed = document.querySelector('[data-completed]');

const nrOfCompleted = document.getElementById('nr-of-completed');

const nrOfToDo = document.getElementById('nr-of-todo');

const btnMore = document.querySelector('[data-btn-more]')

const inputAddNew = document.getElementById('add-new-input');

const btnAdd = document.getElementById('btn-add');

const dropdownMenu = document.querySelector('[data-dropdown-menu]');

const deleteAll = document.querySelector('[data-dropdown-delete-all]');


function addToDo(input) {
    toDo.innerHTML += `<li><i class="gg-radio-check"></i>${input.value}</li>`;
    input.value = '';

    for (let i = 0; i < toDoElements.length; i++) {
        toDoElements[i].addEventListener("click", (element) => {
            addToCompleted(element.target.parentElement);
        });
    }
    nrOfToDo.textContent = toDo.children.length;
    nrOfCompleted.textContent = completed.children.length;
}

function addToCompleted(element) {
    completed.innerHTML += `<li><i class="gg-check-o"></i>${element.outerText}</li>`;
    element.remove();
    nrOfToDo.textContent = toDo.children.length;
    nrOfCompleted.textContent = completed.children.length;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

btnMore.addEventListener('click', () => {
    btnMore.classList.toggle('icon-border');
    dropdownMenu.classList.toggle('active');

});

btnAdd.addEventListener('click', () => {
    addToDo(inputAddNew);
});

deleteAll.addEventListener('click', () => {
    removeAllChildNodes(toDo);
    removeAllChildNodes(completed);
    nrOfToDo.textContent = 0;
    nrOfCompleted.textContent = 0;
});