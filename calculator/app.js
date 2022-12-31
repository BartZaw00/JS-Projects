const previousEquation = document.querySelector('.previousEquation');

const actualResult = document.querySelector('.actual-result');

const btnsNumber = document.querySelectorAll('.number');

const btnsOperator = document.querySelectorAll('.operator');

const btnClear = document.querySelector('.clear');

const btnEquals = document.querySelector('.equals');

let result = '';

let lastOperator = '';





















function displayNumber() {
    console.log(`Button with text ${this.textContent} clicked`)
    /* '' <- javascript traktuje jako literalny ciąg znaków (string) */
    /* "" <- pozwala zawrzeć ${} w stringu */
    /* `` <- pozwala zawrzeć ${} w stringu */
    actualResult.innerHTML += this.textContent;
}


function operation() {
    console.log(this.textContent)
    if (this.textContent == '.' && actualResult.innerHTML == "")
        actualResult.innerHTML += "0.";
    if (actualResult.innerHTML == "")
        return;


    console.log((!isNaN(Number(actualResult.innerHTML.charAt(actualResult.innerHTML.length - 2)))))
    if (!isNaN(actualResult.innerHTML.charAt(actualResult.innerHTML.length - 2)))
        switch (this.textContent) {
            case '+':
                actualResult.innerHTML += ' + ';
                break;
            case '-':
                actualResult.innerHTML += ' - ';
                break;
            case 'x':
                actualResult.innerHTML += ' x ';
                break;
            case ':':
                actualResult.innerHTML += ' : ';
                break;
            case '.':
                if(actualResult.innerHTML.charAt(actualResult.innerHTML.length - 1) != '.')
                actualResult.innerHTML += '.';
                break;
            default:
                actualResult.innerHTML += ' error ';
                break;
        }
}

function equalTo() {
    result = actualResult.innerHTML.replace(/[:]/g, "/");
    result = result.replace(/[x]/g, "*");
    /* zamiana : oraz x na operacje matematyczne czyli / oraz * */
    console.log("Aktualny rezultat: " + result)
    previousEquation.innerHTML = actualResult.innerHTML + ' =';
    actualResult.innerHTML = eval(result);
    /* wykonanie operacji matematycznej na stringu */

}

function clearAll() {
    previousEquation.innerHTML = '';
    actualResult.innerHTML = '';
    result = '';
}


btnsOperator.forEach((button) => {
    button.addEventListener('click', operation);
})

btnEquals.addEventListener('click', equalTo);

btnsNumber.forEach((button) => {
    button.addEventListener("click", displayNumber)
});

btnClear.addEventListener('click', clearAll)
