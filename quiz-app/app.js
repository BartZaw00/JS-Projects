const questionsArr = [
    {
        id: 1,
        question: 'Who won the 2018 FIFA World Cup?',
        numOfAnswers: 4,
        answer1: 'France',
        answer2: 'Germany',
        answer3: 'Brazil',
        answer4: 'Spain',
        correctAnswer: 1
    },
    {
        id: 2,
        question: 'Which country has won the most FIFA World Cups?',
        numOfAnswers: 4,
        answer1: 'Brazil',
        answer2: 'Germany',
        answer3: 'Italy',
        answer4: 'Argentina',
        correctAnswer: 1
    },
    {
        id: 3,
        question: 'Who is the all-time leading goal scorer in the UEFA Champions League?',
        numOfAnswers: 4,
        answer1: 'Lionel Messi',
        answer2: 'Cristiano Ronaldo',
        answer3: 'Raul',
        answer4: 'Lewandowski',
        correctAnswer: 2
    },
    {
        id: 4,
        question: 'Which club has won the most English Premier League titles?',
        numOfAnswers: 4,
        answer1: 'Manchester United',
        answer2: 'Arsenal',
        answer3: 'Chelsea',
        answer4: 'Liverpool',
        correctAnswer: 4
    },
    {
        id: 5,
        question: 'Which team has won the most Copa Libertadores titles?',
        numOfAnswers: 4,
        answer1: 'Boca Juniors',
        answer2: 'River Plate',
        answer3: 'Independiente',
        answer4: 'Racing Club',
        correctAnswer: 2
    },
    {
        id: 6,
        question: 'Who is the all-time leading goal scorer for the Brazilian national team?',
        numOfAnswers: 4,
        answer1: 'Pele',
        answer2: 'Ronaldo',
        answer3: 'Neymar',
        answer4: 'Zico',
        correctAnswer: 1
    },
    {
        id: 7,
        question: 'Which team has won the most UEFA Europa League titles?',
        numOfAnswers: 4,
        answer1: 'Chelsea',
        answer2: 'Inter Milan',
        answer3: 'Sevilla',
        answer4: 'Atletico Madrid',
        correctAnswer: 3
    },
    {
        id: 8,
        question: 'Which team has won the most UEFA Super Cup?',
        numOfAnswers: 4,
        answer1: 'Ajax',
        answer2: 'Real Madrid',
        answer3: 'Barcelona',
        answer4: 'AC Milan',
        correctAnswer: 1
    },
    {
        id: 9,
        question: 'Which team has won the most Inter-Continental Cup?',
        numOfAnswers: 4,
        answer1: 'River Plate',
        answer2: 'Real Madrid',
        answer3: 'Boca Juniors',
        answer4: 'AC Milan',
        correctAnswer: 4
    },
    {
        id: 10,
        question: 'Which team has won the most FIFA Club World Cup?',
        numOfAnswers: 4,
        answer1: 'Real Madrid',
        answer2: 'Barcelona',
        answer3: 'Manchester United',
        answer4: 'Bayern Munich',
        correctAnswer: 2
    },
];

const questionNr = document.querySelector('[data-question-number]');

const timer = document.querySelector('[data-timer]');

const question = document.querySelector('[data-question]');

const answers = document.querySelectorAll('[data-answer]');

const btnSendAnswer = document.querySelector('[data-send-answer]');

let index = 0;

let timerSeconds = 600;

let minutes;
let seconds;

function showQuestion() {
    questionNr.innerHTML = `Question ${index + 1} (${questionsArr.length - index + 1} remaining)`;

}



function timerStart() {
    let interval = setInterval(() => {
        minutes = timerSeconds / 60;
        seconds = timerSeconds % 60;
        // if(timerSeconds <= 600)
        //     timer.classList.add
        if (timerSeconds <= 0)
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

//btnSendAnswer.addEventListener('click',);