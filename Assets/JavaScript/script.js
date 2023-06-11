// Questions and Answers List
var questions = [
    {
        prompt: "1. What does HTML stand for?",
        options: ["Hypo Text Markup Language", "Hyper Text Markdown Language", "Hyper Text Markup Language", "Hyperlink Markdown Language"],
        answer: "Hyper Text Markup Language"
    },

    {
        prompt: "2. What does CSS stand for?",
        options: ["Cumputing Style Sheet", "Cascading Style Sheet", "Creative Style Sheet", "Cascading Syntax Sheet"],
        answer: "Cascading Style Sheet"
    },

    {
        prompt: "3. Where should a CSS file be referenced inside a HTML file?",
        options: ["Inside the Head Section", "Before the closing Body Tag", "Before the first HTML code", "After all of the HTML code"],
        answer: "Inside the Head Section"
    },

    {
        prompt: "4. What is the correct format for changing the background color in CSS?",
        options: ["Background color: blue;", "back ground color: blue;", "Background: blue;", "background-color: blue;"],
        answer: "background-color: blue;"
    },

    {
        prompt: "5. What language is used for person interaction on a webpage?",
        options: ["HTML", "CSS", "JavaScript", "None of the above"],
        answer: "JavaScript"
    },

    {
        prompt: "6. What is a web browser?",
        options: ["Software app in CSS", "Software app in Terminal", "Software app used to make web pages", "Software app for retrieving and presenting information on the web"],
        answer: "Software app for retrieving and presenting information on the web"
    },

    {
        prompt: "7. What is a Comparison Operator?",
        options: ["Used to compare 2 values and return true or false depening on the validity of the comparison", "Compares browsers on the Internet to see if they are good applications", "Logs or prints messages to the console", "None of the above"],
        answer: "Used to compare 2 values and return true or false depening on the validity of the comparison"
    },

    {
        prompt: "8. What does the console.log() do?",
        options: ["It does nothing but cause trouble", "Logs or prints mesages to the console", "Checks 2 values and returns a boolean", "It loops information inside JavaScript"],
        answer: "Logs or prints mesages to the console"
    },

    {
        prompt: "9. Variables are NOT case sensitive. ",
        options: ["True", "False"],
        answer: "False"
    },

    {
        prompt: "10. Which of the following is NOT a correct Math Arithmetic Operator?",
        options: ["Add *", "Multiply *", "Divide /", "Remainder % "],
        answer: "Add *"
    }
];

// Element Query selectors that target IDs in the HTML
var questionsElement = document.querySelector("#questions");
var timerElement = document.querySelector("#timer");
var answerChoiceElement = document.querySelector("#answer-choice");
var scoreSubmitBtnElement = document.querySelector("#score-submit");
var startButtonElement = document.querySelector("#btn-start");
var enterNameElement = document.querySelector("#name");
var answerFeedbackElement = document.querySelector("#feedback");
/*
var  = document.querySelector("#");
*/

// Quiz beginning 
var currentQuestionIndex = 0;
var time = questions.length * 10;
var timerId;

// Start quiz and hide greeting page
function quizStart() {
    timerId = setInterval(clockTick, 1000);
    timerElement.textContent = time;
    var greetingPageElement = document.getElementById("greeting");
    greetingPageElement.setAttribute("class", "hidden");
    questionsElement.removeAttribute("class");
    getQuestion();
}

// Loops through the array of questions and answers from above and creates a list
function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var promptElement = document.getElementById("web-dev-questions")
    promptElement.textContent = currentQuestion.prompt;
    answerChoiceElement.innerHTML = "";
    currentQuestion.options.forEach(function(choice, i) {
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("value", choice);
    choiceBtn.textContent = i + 1 + ". " + choice;
    choiceBtn.onclick = questionClick;
    answerChoiceElement.appendChild(choiceBtn);
    });
}

//This section will check for the Correct or Wrong answers and will Deduct Time for the Wrong answers
function questionClick() {
// This subtracts 10 seconds off of the clock for Wrong answer    
    if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 10;
        if (time < 0) {
            time = 0;
        }
// This will display a message when Wrong answer is given in color maroon
        timerElement.textContent = time;
        answerFeedbackElement.textContent = 'Sorry, but that answer is WRONG !';
        answerFeedbackElement.style.color = "maroon";
// This will display a message when Correct answer is given in the color green
    } else {
        answerFeedbackElement.textContent = "Correct !";
        answerFeedbackElement.style.color = "green";
    }
    answerFeedbackElement.setAttribute("class", "feedback");

}


/*1. What does HTML stand for?
a) Hypo Text Markup Language    b) Hyper Text Markdown Language
c) Hyper Text Markup Language   d) Hyperlink Markdown Language
ANSWER: c 

2. What does CSS stand for?
a) Cumputing Style Sheet        b) Cascading Style Sheet
c) Creative Style Sheet         d) Cascading Syntax Sheet
ANSWER: b 

3. Where should a CSS file be referenced inside a HTML file?
a) Inside the head Section      b) Before the closing body tag 
c) Before the first HTML code   d) After all of the HTML code 
ANSWER: a 

4. What is the correct format for changing the background color in CSS?
a) Background color: blue;      b) Back ground color blue;
c) Background: blue;            d) Background-color: blue;
ANSWER: d 

5. What language is used for person interaction on a webpage?
a) HTML                         b) CSS 
c) JavaScript                   d) None of the above 
ANSWER: c 

6. What is a web browser?
a) Something in my CSS          b) Something in my Terminal 
c) Used to make web pages       d) Software app for retrieving and presenting information on the web 
ANSWER: d 

7. What is a Comparison Operator?
a) Used to compare 2 values and return true or false depening on the validity of the comparison 
b) Compares browsers on the Internet to see if they are good applications 
c) Logs or prints messages to the console 
d) None of the above 
ANSWER: a 

8. What does the console.log() do?
a) It does nothing but cause trouble   
b) Logs or prints mesages to the console 
c) Checks 2 values and returns a boolean 
d) It loops information inside JavaScript
ANSWER: b  

9. Variables are NOT case sensitive. 
a) True 
b) False 
ANSWER: b 

10. Which of the following is NOT a correct Math Arithmetic Operator?
a) Add *                        b) Multiply *
c) Divide /                     d) Remainder % 
ANSWER: a
*/