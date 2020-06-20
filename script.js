var quiz = window.alert("Here's your first Code quiz, ENJOY!")
var mainEl = document.getElementById("countdown");
var howCorrect = window.prompt("How many questions can you get correct?") 
var questions = new Array();
var choices = new Array();
var answers = new Array();
var ii = 0;
var i = 0;
var averageScore = 0;
var correct = 0;
var trueFalse = true;


function timerQuiz() {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.id = "countdown";

    var timeleft = 100;
    var quizTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(quizTimer);
            document.getElementById("countdown").innerHTML = "Finished";
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
    }, 1000);
}


var createQuizActions = function() {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "quiz-actions";
    actionContainerEl.innerHTML = "<h3 class='quizQuestion-name'>" + questions[i] + "</h3>";
    
    var firstButtonEl = document.createElement("button");
    firstButtonEl.textContent = choices[i][ii];
    firstButtonEl.className = "btn first-btn";
    ii++;

    var secondButtonEl = document.createElement("button");
    secondButtonEl.textContent = choices[i][ii];
    secondButtonEl.className = "btn second-btn";
    ii++;

    var thirdButtonEl = document.createElement("button");
    thirdButtonEl.className = choices[i][ii];
    thirdButtonEl.className = "btn third-btn";
    ii++;

    var fourthButtonEl = document.createElement("button");
    fourthButtonEl.className = choices[i][ii];
    fourthButtonEl.className = "btn fourth-btn";
    ii = 0;

    while(trueFalse){
        firstButtonEl.addEventListener("click", correctChoice(0))
        secondButtonEl.addEventListener("click", correctChoice(1))
        thirdButtonEl.addEventListener("click", correctChoice(2))
        fourthButtonEl.addEventListener("click", correctChoice(3))

        console.log("testing")
        console.log(actionContainerEl)
    }
}


var correctChoice = function(num){
    if(answers[i] === choices[i][num]) {
        correct++;
    }

    if (i === 5){
        averageScore = Math.round(correct * 16.666);
    }else{
        i++;
    }

    trueFalse = false;
}


var quiz = function() {
    timerQuiz();
    for(var n = 0; n < 6; n++){
        debugger;
        createQuizActions();
    }

    clearInterval(timeInterval);
}


var saveScore = function(){

}


questions[0] = "1) HTML stands for what?";
choices[0] = new Array();
choices[0][0] = "hyper tab maybe later";
choices[0][1] = "hyper text markup language";
choices[0][2] = "hilarious totem might love";
choices[0][3] = "hyper tab match language";
answers[0] = choices[0][1]

questions[1] = "2) To comment out a single line in JavaScript?";
choices[1] = new Array();
choices[1][0] = "Precede it with two forward slashes, i.e. '//'";
choices[1][1] = "Precede it with an asterisk and a forward slash, i.e. '*/'";
choices[1][2] = "Precede it with an asterisk, i.e. '*'";
choices[1][3] = "Precede it with a forward slash and an asterisk, i.e. '/*'";
answers[1] = choices[1][0];

questions[2] = "3) The four basic data types are?";
choices[2] = new Array();
choices[2][0] = "strings, numbers, BooBoos, and nulls";
choices[2][1] = "strings, text, Booleans, and nulls";
choices[2][2] = "strings, numbers, Booleans, and nulls";
choices[2][3] = "strings, numbers, Booleans, and zeros";
answers[2] = choices[2][2];

questions[3] = "4) JavaScript is?";
choices[3] = new Array();
choices[3][0] = "subjective";
choices[3][1] = "objective";
choices[3][2] = "evil";
choices[3][3] = "object based";
answers[3] = choices[3][3];

questions[4] = "5) Semicolons are optional at the end of a JavaScript statement.";
choices[4] = new Array();
choices[4][0] = "True";
choices[4][1] = "False";
answers[4] = choices[4][0];

questions[5] = "6) JavaScript can only run on Windows";
choices[5] = new Array();
choices[5][0] = "True";
choices[5][1] = "False";
answers[5] = choices[5][1];


quiz();