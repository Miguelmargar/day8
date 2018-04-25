let 
score = 0,
scorebox = document.getElementById("score"),
questionbox = document.getElementById("question"),
answerForm = document.getElementById("quizForm");

function setAddGame() {
    answerForm.setAttribute("data-gametype", "addition");
    addquiz();
}

function setSubGame() {
    answerForm.setAttribute("data-gametype", "substraction");
    subquiz();
}

function setMultiGame() {
    answerForm.setAttribute("data-gametype", "multiplication");
    multiquiz();
}



function checkAnswer() {
    let gametype = answerForm.getAttribute("data-gametype");
    if (answerForm["answer"].value == answerForm["rightAnswer"].value) {
        alert("Hey! You got it right");
        score++;
    } else {
        alert("Oh no! A wrong answer: (");
    }
    answerForm["answer"].value = "";
    scorebox.textContent = score;
    if (gametype == "addition") {
        addquiz();
    } else if (gametype == "substraction") {
        subquiz();
    } else if (gametype == "multiplication") {
        multiquiz();
    }
    return false;
}

function addquiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random()* 50);
    
    questionbox.textContent = "What is: " + num1 + " + " + num2 + "?";
    
    answerForm["rightAnswer"].value = (num1 + num2);
}
addquiz();

function subquiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random()* 50);
    
    if (num1 > num2) {
        questionbox.textContent = "What is: " + num1 + " - " + num2 + "?";
    } else if (num1 < num2) {
        questionbox.textContent = "What is: " + num2 + " - " + num1 + "?";
    }
    
    answerForm["rightAnswer"].value = (num1 - num2);
}
subquiz();

function multiquiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random()* 50);
    
    questionbox.textContent = "What is: " + num1 + " * " + num2 + "?";
    
    answerForm["rightAnswer"].value = (num1 * num2);
}
multiquiz();



