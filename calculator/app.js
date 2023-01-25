const previousNumber = document.querySelector('[data-previous-number]');

const mathSign = document.querySelector('[data-math-sign');

const actualNumber = document.querySelector('[data-actual-number]');

const btnsNumber = document.querySelectorAll('[data-number]');

const btnsOperator = document.querySelectorAll('[data-operator]');

const btnClear = document.querySelector('[data-clear]');

const btnDel = document.querySelector('[data-del]');

const btnEquals = document.querySelector('[data-equals]');

const btnHistoryClear = document.querySelector('[data-clear-history]');

const historyResult = document.querySelector('[data-history-result]');

const historyResults = document.querySelector('[data-history-results]');


let listElement = '';

let listContent = '';


let result = 0;

let lastEquation = '';





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
    if (mathSign.innerHTML !== "")
        equalTo();
    

    previousNumber.innerHTML = actualNumber.innerHTML;
    if(mathSign.innerHTML = 'ab')
        mathSign.innerHTML = '^';
    else
        mathSign.innerHTML = this.textContent;
    actualNumber.innerHTML = '';
}

function equalTo() {
    let a = Number(previousNumber.innerHTML);
    let b = Number(actualNumber.innerHTML);
    let operator = mathSign.innerHTML;

    console.log(operator)

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case 'x':
            if (!isDecimal(a) && !isDecimal(b))
                result = a.toFixed(2) * b.toFixed(2);
            else if (!isDecimal(a))
                result = a.toFixed(2) * b;
            else if (!isDecimal(b))
                result = a * b.toFixed(2);
            else
                result = a * b;
            break;
        case ':':
            if (!isDecimal(a) && !isDecimal(b))
                result = a.toFixed(2) / b.toFixed(2);
            else if (!isDecimal(a))
                result = a.toFixed(2) / b;
            else if (!isDecimal(b))
                result = a / b.toFixed(2);
            else
                result = a / b;
            break;
        case 'ab':
            if (!isDecimal(a) && !isDecimal(b))
                result = a.toFixed(2) ** b.toFixed(2);
            else if (!isDecimal(a))
                result = a.toFixed(2) ** b;
            else if (!isDecimal(b))
                result = a ** b.toFixed(2);
            else
                result = a ** b;
            break;
        default:
            break;
    }

    if (this.textContent !== "=") {
        addToLastEquation(a, b, operator);
    }

    if (this.textContent === "=") {
        addToLastEquation(a, b, operator);
        if (!isDecimal(result))
            lastEquation += result.toFixed(2);
        else
            lastEquation += result;
        addToHistory();
    }

    console.log(lastEquation)

    if (!isDecimal(result))
        actualNumber.innerHTML = result.toFixed(2);
    else
        actualNumber.innerHTML = result;
        
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
    lastEquation = '';
    /* wykonanie operacji matematycznej na stringu */
    /* NIE KORZYSTAĆ Z EVAL() !!! */
}

function addToLastEquation(a, b, operator) {
    lastEquation += a;
    lastEquation += ' ' + operator + ' ';
    lastEquation += b;
    lastEquation += ' = ';
}

function addToHistory() {
    historyResult.innerHTML = lastEquation;
    listElement = document.createElement("li")
    listContent = document.createTextNode(lastEquation);
    listElement.appendChild(listContent);
    historyResults.appendChild(listElement);
}

function clearHistory() {
    historyResult.innerHTML = '';
    /* nowa wersja do usuwania wszystkich child elements */
    historyResults.replaceChildren();
}

function clearAll() {
    previousNumber.innerHTML = '';
    actualNumber.innerHTML = '';
    mathSign.innerHTML = '';
    result = '';
    lastEquation = '';
}

function isDecimal(n) {
    return n % 1 === 0;
}

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

btnsOperator.forEach((button) => {
    button.addEventListener('click', pickOperation);
})

btnEquals.addEventListener('click', equalTo);

btnsNumber.forEach((button) => {
    button.addEventListener("click", displayNumber);
});

btnClear.addEventListener('click', clearAll);

btnDel.addEventListener('click', () => {
    actualNumber.innerHTML = actualNumber.innerHTML.slice(0, -1);
});

btnHistoryClear.addEventListener('click', clearHistory);