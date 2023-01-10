const previousNumber = document.querySelector('[data-previous-number]');

const mathSign = document.querySelector('[data-math-sign');

const actualNumber = document.querySelector('[data-actual-number]');

const btnsNumber = document.querySelectorAll('[data-number]');

const btnsOperator = document.querySelectorAll('[data-operator]');

const btnClear = document.querySelector('[data-clear]');

const btnEquals = document.querySelector('[data-equals]');

const btnHistoryClear = document.querySelector('[data-clear-history]');

let result = '';

let lastOperator = '';





















function displayNumber() {
    /* jezeli przycisk w jaki klikamy ma textContent === . oraz aktualny rezultat jest pusty */
    if (this.textContent === '.' && actualNumber.innerHTML === "")
        return actualNumber.innerHTML = ".0";
    /* jezeli przycisk w jaki klikamy ma textContent === . oraz aktualny rezultat zawiera "." */
    if (this.textContent === '.' && actualNumber.innerHTML.includes("."))
        return

    console.log('aktualny rezultat: ' + actualNumber.innerHTML)
    /* '' <- javascript traktuje jako literalny ciąg znaków (string) */
    /* "" <- pozwala zawrzeć ${} w stringu */
    /* `` <- pozwala zawrzeć ${} w stringu */
    actualNumber.innerHTML += this.textContent;
}


function pickOperation() {
    if (actualNumber.innerHTML === "" && this.textContent === "-")
        return actualNumber.innerHTML = "-";
    if (actualNumber.innerHTML === "")
        return

    previousNumber.innerHTML = actualNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    actualNumber.innerHTML = '';
}

function equalTo() {

    let a = Number(previousNumber.innerHTML);
    let b = Number(actualNumber.innerHTML);
    let operator = mathSign.innerHTML;

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case 'x':
            result = a * b;
            break;
        case ':':
            result = a / b;
            break;
        default:
            break;
    }

    console.log('result: ' + result.toString())

    actualNumber.innerHTML = result;
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';


    //     /* wykonanie operacji matematycznej na stringu */
    //     /* NIE KORZYSTAĆ Z EVAL() !!! */
}

function clearAll() {
    previousNumber.innerHTML = '';
    actualNumber.innerHTML = '';
    mathSign.innerHTML = '';
    result = '';
}


btnsOperator.forEach((button) => {
    button.addEventListener('click', pickOperation);
})

btnEquals.addEventListener('click', equalTo);

btnsNumber.forEach((button) => {
    button.addEventListener("click", displayNumber)
});

btnClear.addEventListener('click', clearAll)