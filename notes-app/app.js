//const delBtn = document.getElementById('data-del-note-btn');

const addBtn = document.getElementById('add-note-btn');

const modal = document.getElementById('modal');

const closeModalBtn = document.getElementById('close-modal-btn')

const textarea = document.getElementById('textarea');

const overlay = document.getElementById('overlay');

let notes = document.getElementById('notes');

let editNoteBtns;
let delNoteBtns;


function displayNotes() {
    notes.innerHTML += closeModal();
    if(notes.textContent === undefined) notes.innerHTML = '';
    textarea.value = '';
    editNoteBtns = notes.querySelectorAll('[data-edit-note-btn]');
    delNoteBtns = notes.querySelectorAll('[data-del-note-btn]');
    console.log(editNoteBtns);
    console.log(delNoteBtns);
}

function openModal() {
    if (!modal.classList.contains('active')) {
        modal.classList.add('active');
        overlay.classList.add('active');
    }
}

function closeModal() {
    if (modal.classList.contains('active')) {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }
    if (textarea.value.length === 0) return

    return `<div class="note">
    <button data-del-note-btn class="del-btn">&times;</button>
    <p>${textarea.value}</p>
    <button data-edit-note-btn class="edit-btn">EDIT</button>
</div> `;
}

addBtn.addEventListener('click', () => {
    openModal();
});

closeModalBtn.addEventListener('click', () => {
    displayNotes();
});

overlay.addEventListener('click', () => {
    displayNotes();
})