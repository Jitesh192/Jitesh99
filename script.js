const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "Berlin",
            b: "Madrid",
            c: "Paris"
        },
        correctAnswer: "c"
    },
    {
        question: "Who is the CEO of Tesla?",
        answers: {
            a: "Jeff Bezos",
            b: "Elon Musk",
            c: "Bill Gates"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: {
            a: "Earth",
            b: "Jupiter",
            c: "Saturn"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the chemical symbol for water?",
        answers: {
            a: "H2O",
            b: "O2",
            c: "CO2"
        },
        correctAnswer: "a"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: {
            a: "William Shakespeare",
            b: "Charles Dickens",
            c: "Mark Twain"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the speed of light?",
        answers: {
            a: "300,000 km/s",
            b: "150,000 km/s",
            c: "450,000 km/s"
        },
        correctAnswer: "a"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: {
            a: "Mars",
            b: "Venus",
            c: "Jupiter"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the largest mammal?",
        answers: {
            a: "Elephant",
            b: "Blue Whale",
            c: "Giraffe"
        },
        correctAnswer: "b"
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: {
            a: "Vincent van Gogh",
            b: "Pablo Picasso",
            c: "Leonardo da Vinci"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the smallest unit of life?",
        answers: {
            a: "Cell",
            b: "Atom",
            c: "Molecule"
        },
        correctAnswer: "a"
    }
];

function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
