//const delBtn = document.getElementById('data-del-note-btn');

const addBtn = document.getElementById('add-note-btn');

const modal = document.getElementById('modal');

const closeModalBtn = document.getElementById('close-modal-btn')

const textarea = document.getElementById('textarea');

const overlay = document.getElementById('overlay');

let notes = document.getElementById('notes');

let editNoteBtns;
let delNoteBtns;

let noteToEdit;


function displayNotes() {
    if (closeModal() === undefined) return
    if (textarea.value.length === 0 || textarea.value === "") return
    notes.innerHTML += closeModal();
    textarea.value = '';
    editNoteBtns = notes.querySelectorAll('[data-edit-note-btn]');
    delNoteBtns = notes.querySelectorAll('[data-del-note-btn]');

    for (let i = 0; i < editNoteBtns.length; i++) {

        editNoteBtns[i].addEventListener('click', (btn) => {
            console.log(btn)
            noteToEdit = btn.target.parentElement;
            editModal(noteToEdit);
        })

        delNoteBtns[i].addEventListener('click', (btn) => {
            btn.target.parentElement.remove();
        })
    }
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

    if (noteToEdit) {
        noteToEdit.children[1].textContent = textarea.value;
        noteToEdit = null;
        textarea.value = '';
        return;
    }

    return `<div class="note">
    <button data-del-note-btn class="del-btn">&times;</button>
    <p>${textarea.value}</p>
    <button data-edit-note-btn class="edit-btn">EDIT</button>
</div> `;
}

function editModal(note) {
    if (!modal.classList.contains('active')) {
        modal.classList.add('active');
        overlay.classList.add('active');
    }
    textarea.value = note.children[1].textContent;
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

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        displayNotes();
    }
});