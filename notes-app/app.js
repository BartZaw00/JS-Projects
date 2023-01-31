const delBtn = document.getElementById('del-note-btn');

const addBtn = document.getElementById('add-btn');

const modal = document.getElementById('modal');

const closeModalBtn = document.getElementById('close-modal-btn')

const textarea = document.getElementById('textarea');


function openModal() {
    if (!modal.classList.contains('show'))
        modal.classList.add('show');
}

function closeModal() {
    if (modal.classList.contains('show'))
        modal.classList.remove('show');
    //if(inputText.length === 0) return
    //return ` <div class="note">
    //<button id="del-btn">&times;</button>
    //</div > `;
}

delBtn.addEventListener('click', () => {

});

addBtn.addEventListener('click', () => {
    openModal();
});

closeModalBtn.addEventListener('click', () => {
    closeModal();
});