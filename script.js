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
var timeleft = 100;
var elem = "";


function timerQuiz() {
    var quizTimer = setInterval(function(){
        if(timeleft <= 0 || i >= 6){
            clearInterval(quizTimer);
            document.getElementById("countdown").innerHTML = "Finished";
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
    }, 1000);
}


var remove = function(strng, stng, strg, strn, stri){
    elem = document.getElementById(strng);
    elem.remove();
    elem = document.getElementById(stng);
    elem.remove();
    elem = document.getElementById(strg);
    elem.remove();
    elem = document.getElementById(strn);
    elem.remove();
    elem = document.getElementById(stri);
    elem.remove();
}


var endFun = function(){
    var end = document.createElement("h3");
    end.innerHTML = "You got a scored of " + averageScore;
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(end);
}


var correctChoice = function(num){
    if(answers[i] === choices[i][num]) {
        correct++;
    }
    i++;
}


var quiz = function(){
    timerQuiz();
    createQuizActions();
}


var createQuizActions = function(){

    if(i === 6){
        averageScore = Math.round(correct * 16.6667)
        endFun();
        return;
    }

    var question = document.createElement("h3");
    question.innerHTML = questions[i];
    question.setAttribute("id", "type-questions")
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(question);


    var button = document.createElement("button");
    button.innerHTML = choices[i][ii];
    button.setAttribute("id", "fi-button")
    body.appendChild(button);
    ii++;


    var buttonS = document.createElement("button");
    buttonS.innerHTML = choices[i][ii];
    buttonS.setAttribute("id", "se-button")
    body.appendChild(buttonS);
    ii++;


    var buttonT = document.createElement("button");
    buttonT.innerHTML = choices[i][ii];
    buttonT.setAttribute("id", "th-button")
    body.appendChild(buttonT);
    ii++;


    var buttonF = document.createElement("button");
    buttonF.innerHTML = choices[i][ii];
    buttonF.setAttribute("id", "fo-button")
    body.appendChild(buttonF);
    ii = 0;


    button.addEventListener ("click", function(){
        if(answers[i] === choices[i][0]) {
            correct++;
        }
        i++;
        remove("type-questions", "fi-button", "se-button", "th-button", "fo-button");
        createQuizActions();
    });

    buttonS.addEventListener ("click", function(){
        if(answers[i] === choices[i][1]) {
            correct++;
        }
        i++;
        remove("type-questions", "fi-button", "se-button", "th-button", "fo-button");
        createQuizActions();
    });

    buttonT.addEventListener ("click", function(){
        if(answers[i] === choices[i][2]) {
            correct++;
        }
        i++;
        remove("type-questions", "fi-button", "se-button", "th-button", "fo-button");
        createQuizActions();
    });

    buttonF.addEventListener ("click", function(){
        if(answers[i] === choices[i][3]) {
            correct++;
        }
        i++;
        remove("type-questions", "fi-button", "se-button", "th-button", "fo-button");
        createQuizActions();
    });
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
choices[4][2] = "Both";
choices[4][3] = "Neither";
answers[4] = choices[4][0];

questions[5] = "6) JavaScript can only run on Windows";
choices[5] = new Array();
choices[5][0] = "True";
choices[5][1] = "False";
choices[5][2] = "Both";
choices[5][3] = "Neither";
answers[5] = choices[5][1];


quiz();