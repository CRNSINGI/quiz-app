const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},

        ]
    },

    {

        question: "Which is smallest animal in the world?",
        answers: [
            {text: "Myxozoa", correct: true},
            {text: "Fish", correct: false},
            {text: "Dog", correct: false},
            {text: "Cat", correct: false},

        ]

    },


    {
        question: "Which is largest desert in the world?",
        answers: [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: true},
            {text: "Sahara", correct: false},
            {text: "Antarctica", correct: true},

        ]
    },

    {

        question: "Which is the smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},

        ]

    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("asnwer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}