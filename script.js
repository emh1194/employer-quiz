quizScore = [];

const question = document.getElementById("question");
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const main = document.getElementById("main");

function displayQuestion(object) {
    question.textContent = object.question;
    answerA.textContent = object.answerA;
    answerB.textContent = object.answerB;
    answerC.textContent = object.answerC;
}

let i = 0;

function nextQuestion() {
    i++;
    console.log("clicked!");
    console.log(i);
    displayQuestion(questions[i]);
    if (i == 5)  {
        endQuiz();
    }
}

function getScore() {
    return quizScore.reduce(function(acc, val) {
        return acc + val;
    }, 0);
}

answerC.addEventListener(("click"), () => {
    quizScore.push(1);
    console.log(quizScore);
});

function endQuiz() {
    if (getScore() < 4) {
        let sadContent = document.createElement("p");
        sadContent.textContent = "Are you sure that's what you're looking for?";
        return main.appendChild(sadContent);
    } else {
        let happyContent = document.createElement("p");
        happyContent.textContent = "Sounds like you want Eric Hormuth for the job!";
        return main.appendChild(happyContent);
    }
}

const questions = [

    questionOne = {
        question: "Do you want to an employee who is:",
        answerA: "Cranky?",
        answerB: "Indifferent?",
        answerC: "Positive?"
},

    questionTwo = {
        question: "Do you want an employee who uses tech:",
        answerA: "To take over the world?",
        answerB: "To isolate themselves from the world?",
        answerC: "To help others?"
},

    questionThree = {
        question: "Do you want an employee who:",
        answerA: "Thinks they know everything?",
        answerB: "Is afraid to try new things?",
        answerC: "Is hungry to learn an contribute?"
},

    questionFour = {
        question: "Do you want an employee:",
        answerA: "Who wants to get some experience and move on?",
        answerB: "Who is always distracted by the next thing?",
        answerC: "With deep ties to the community?"
},

    questionFive = {
        question: "Do you want an employee:",
        answerA: "Who has has little experience helping others?",
        answerB: "Who puts themselves first?",
        answerC: "Who has already cultivated a career based on helping others?"
},

    questionSix = {
        question: "",
        answerA: "",
        answerB: "",
        answerC: ""
},



]

displayQuestion(questions[i]);