const delBtn = document.getElementById('del-note-btn');

const addBtn = document.getElementById('add-btn');

const modal = document.getElementById('modal');

const closeModalBtn = document.getElementById('close-modal-btn')

const textarea = document.getElementById('textarea');

const overlay = document.getElementById('overlay');


function openModal() {
    if (!modal.classList.contains('active'))
        modal.classList.add('active');
        overlay.classList.add('active');
}

function closeModal() {
    if (modal.classList.contains('active')) {
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }

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