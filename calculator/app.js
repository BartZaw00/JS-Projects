const previousEquation = document.querySelector('[data-previous-equation]');

const actualResult = document.querySelector('[data-actual-result]');

const btnsNumber = document.querySelectorAll('[data-number]');

const btnsOperator = document.querySelectorAll('[data-operator]');

const btnClear = document.querySelector('[data-clear]');

const btnEquals = document.querySelector('[data-equals]');

const btnHistoryClear = document.querySelector('[data-clear-history]');

let result = '';

let lastOperator = '';





















function displayNumber() {
    /* jezeli przycisk w jaki klikamy ma textContent === . oraz aktualny rezultat jest pusty */
    if (this.textContent === '.' && actualResult.innerHTML === "")
        return ".0";
    /* jezeli przycisk w jaki klikamy ma textContent === . oraz aktualny rezultat zawiera "." */
    if (this.textContent === '.' && actualResult.innerHTML.includes("."))
        return

    console.log('aktualny rezultat: ' + actualResult.innerHTML)
    /* '' <- javascript traktuje jako literalny ciąg znaków (string) */
    /* "" <- pozwala zawrzeć ${} w stringu */
    /* `` <- pozwala zawrzeć ${} w stringu */
    actualResult.innerHTML += this.textContent;
}


function pickOperation() {
    //     console.log(this.textContent)
    //     if (this.textContent == '.' && actualResult.innerHTML == "")
    //         actualResult.innerHTML += "0.";
    //     if (actualResult.innerHTML == "")
    //         return;


    //     console.log((!isNaN(Number(actualResult.innerHTML.charAt(actualResult.innerHTML.length - 2)))))
    //     if (!isNaN(actualResult.innerHTML.charAt(actualResult.innerHTML.length - 2)))
    //         switch (this.textContent) {
    //             case '+':
    //                 actualResult.innerHTML += ' + ';
    //                 break;
    //             case '-':
    //                 actualResult.innerHTML += ' - ';
    //                 break;
    //             case 'x':
    //                 actualResult.innerHTML += ' x ';
    //                 break;
    //             case ':':
    //                 actualResult.innerHTML += ' : ';
    //                 break;
    //             case '.':
    //                 if (actualResult.innerHTML.charAt(actualResult.innerHTML.length - 1) != '.')
    //                     actualResult.innerHTML += '.';
    //                 break;
    //             default:
    //                 actualResult.innerHTML += ' error ';
    //                 break;
    //         }
}

function equalTo() {
    //     result = actualResult.innerHTML.replace(/[:]/g, "/");
    //     result = result.replace(/[x]/g, "*");
    //     /* zamiana : oraz x na operacje matematyczne czyli / oraz * */
    //     console.log("Aktualny rezultat: " + result)
    //     previousEquation.innerHTML = actualResult.innerHTML + ' =';
    //     // actualResult = ?
    //     /* wykonanie operacji matematycznej na stringu */
    //     /* NIE KORZYSTAĆ Z EVAL() !!! */
}

function clearAll() {
    previousEquation.innerHTML = '';
    actualResult.innerHTML = '';
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