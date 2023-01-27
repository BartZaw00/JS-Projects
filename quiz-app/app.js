const questionsArr = [
    {
        id: 1,
        question: 'Who won the 2018 FIFA World Cup?',
        numOfAnswers: 4,
        answersArr: ['France', 'Germany', 'Brazil', 'Spain'],
        correctAnswer: 1
    },
    {
        id: 2,
        question: 'Which country has won the most FIFA World Cups?',
        numOfAnswers: 4,
        answersArr: ['Brazil', 'Germany', 'Italy', 'Argentina'],
        correctAnswer: 1
    },
    {
        id: 3,
        question: 'Who is the all-time leading goal scorer in the UEFA Champions League?',
        numOfAnswers: 4,
        answersArr: ['Lionel Messi', 'Cristiano Ronaldo', 'Raul', 'Lewandowski'],
        correctAnswer: 2
    },
    {
        id: 4,
        question: 'Which club has won the most English Premier League titles?',
        numOfAnswers: 4,
        answersArr: ['Manchester United', 'Arsenal', 'Chelsea', 'Liverpool'],
        correctAnswer: 4
    },
    {
        id: 5,
        question: 'Which team has won the most Copa Libertadores titles?',
        numOfAnswers: 4,
        answersArr: ['Boca Juniors', 'River Plate', 'Independiente', 'Racing Club'],
        correctAnswer: 2
    },
    {
        id: 6,
        question: 'Who is the all-time leading goal scorer for the Brazilian national team?',
        numOfAnswers: 4,
        answersArr: ['Pele', 'Ronaldo', 'Neymar', 'Zico'],
        correctAnswer: 1
    },
    {
        id: 7,
        question: 'Which team has won the most UEFA Europa League titles?',
        numOfAnswers: 4,
        answersArr: ['Chelsea', 'Inter Milan', 'Sevilla', 'Atletico Madrid'],
        correctAnswer: 3
    },
    {
        id: 8,
        question: 'Which team has won the most UEFA Super Cup?',
        numOfAnswers: 4,
        answersArr: ['Ajax', 'Real Madrid', 'Barcelona', 'AC Milan'],
        correctAnswer: 1
    },
    {
        id: 9,
        question: 'Which team has won the most Inter-Continental Cup?',
        numOfAnswers: 4,
        answersArr: ['River Plate', 'Real Madrid', 'Boca Juniors', 'AC Milan'],
        correctAnswer: 4
    },
    {
        id: 10,
        question: 'Which team has won the most FIFA Club World Cup?',
        numOfAnswers: 4,
        answersArr: ['Real Madrid', 'Barcelona', 'Manchester United', 'Bayern Munich'],
        correctAnswer: 2
    }
];


const questionNr = document.querySelector('[data-question-number]');

const timer = document.querySelector('[data-timer]');

const question = document.querySelector('[data-question]');

const form = document.querySelector('[data-form]');

//const answers = document.querySelectorAll('[data-answer]');

//const answersNr = document.querySelectorAll('[data-answer-number]');

const btnSendAnswer = document.querySelector('[data-send-answer]');


let index = 0;

let timerSeconds = 600;

let minutes;
let seconds;

let score = 0;
let pArray = [];
let spanArray = [];


function showQuestion() {
    questionNr.textContent = `Question ${index + 1} (${questionsArr.length - index - 1} remaining)`;
    question.textContent = questionsArr[index].question;

    for (let i = 0; i < questionsArr[index].numOfAnswers; i++) {
        pArray[i] = document.createElement("p");
        spanArray[i] = document.createElement("span");
        pArray[i].setAttribute('data-answer', '');
        pArray[i].classList.add('answer');
        spanArray[i].textContent = `${String.fromCharCode(i + 65)}`;
        pArray[i].textContent = questionsArr[index].answersArr[i];
        form.appendChild(pArray[i]);
        pArray[i].insertBefore(spanArray[i], pArray[i].childNodes[0]);
    }
    index++;
}


function showNextQuestion() {
    if (index >= questionsArr.length) {
        //showEndScreen();
        return
    }
    let answerElements = document.querySelectorAll("[data-answer]");
    console.log(answerElements)
    answerElements.forEach((item) => {
        item.remove();
    });
    showQuestion();
}


function timerStart() {
    let interval = setInterval(() => {
        minutes = timerSeconds / 60;
        seconds = timerSeconds % 60;
        // if(timerSeconds <= 600)
        //     timer.classList.add
        if (timerSeconds < 0)
            clearInterval(interval);
        else {
            timer.textContent = `${Math.floor(minutes)}:${Math.floor(seconds)}`;
            if (minutes < 10)
                timer.textContent = `0${Math.floor(minutes)}:${Math.floor(seconds)}`;
            if (seconds < 10)
                timer.textContent = `${Math.floor(minutes)}:0${Math.floor(seconds)}`;
            timerSeconds--;
        }
    }, 1000);
}

window.addEventListener('DOMContentLoaded', timerStart);
window.addEventListener('DOMContentLoaded', showQuestion);

btnSendAnswer.addEventListener('click', showNextQuestion);

// answers.forEach((answer) => {
//     answer.addEventListener('click', () => {
//         // a loop to 'deselect' all answers that are not chosen
//         pArray.forEach((item) => {
//             if (item !== answer)
//                 item.classList.remove('chosen-answer');
//         });
//         answer.classList.toggle('chosen-answer');
//     })
// });