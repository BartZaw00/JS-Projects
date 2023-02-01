//const delBtn = document.getElementById('data-del-note-btn');

const addBtn = document.getElementById('add-note-btn');

const modal = document.getElementById('modal');

const closeModalBtn = document.getElementById('close-modal-btn')

const textarea = document.getElementById('textarea');

const overlay = document.getElementById('overlay');

let notes = document.getElementById('notes');



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
    
    notes.innerHTML += `<div class="note">
    <button data-del-note-btn class="del-btn">&times;</button>
    <p>${textarea.value}</p>
    <button data-edit-note-btn class="edit-btn">EDIT</button>
</div> `;
    textarea.value = '';
}

addBtn.addEventListener('click', () => {
    openModal();
});

closeModalBtn.addEventListener('click', () => {
    closeModal();
});

overlay.addEventListener('click', () => {
    closeModal();
})