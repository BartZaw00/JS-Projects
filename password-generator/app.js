const length = document.querySelector('[data-length]');

const range = document.querySelector('[data-range]');

const btns = document.querySelectorAll('[data-button]');

const submitBtn = document.querySelector('[data-submit-button]');

const generatedPassword = document.querySelector('[data-password]');


function generateRandomString(length) {
    let result = '';
    let randomNum = 0;
    let selectedOptions = [];

    for (let i = 0; i < 4; i++)
        if (btns[i].classList.contains('switch'))
            selectedOptions.push(i + 1);

    for (let i = 0; i < length; i++) {
        let option = selectedOptions[Math.floor(Math.random() * selectedOptions.length)];
        switch (option) {
            case 1:
                randomNum = Math.floor(Math.random() * (90 - 65 + 1) + 65);
                break;
            case 2:
                randomNum = Math.floor(Math.random() * (122 - 97 + 1) + 97);
                break;
            case 3:
                randomNum = Math.floor(Math.random() * (57 - 48 + 1) + 48);
                break;
            case 4:
                randomNum = Math.floor(Math.random() * (47 - 33 + 1) + 33);
                break;
            default:
                break;
        }
        result += String.fromCharCode(randomNum);
    }
    return result;

    //A-Z -> 65 - 90
    //a-z -> 97 - 122
    //0-9 -> 48 -57
    //znaki -> 33-47
}


range.addEventListener('input', () => {
    length.textContent = range.value;
});

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        let selectedCount = 0;

        btns.forEach((btn) => {
            if (btn.classList.contains('switch')) {
                selectedCount++;
            }
        });

        if (selectedCount === 1 && btn.classList.contains('switch')) {
            return;
        }


        btn.classList.toggle('switch');
        btn.classList.toggle('play-active');
    });
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    generatedPassword.textContent = generateRandomString(range.value);
});