let score = 0;
let scoreResult = document.getElementById("score");
let ansForm = document.getElementById("answerForm");
let challenge = document.getElementById("question");
  
function setAddType() {
    ansForm.setAttribute("data-gameButtonType", "addition");
    addQuiz();
}

function setSubType() {
    ansForm.setAttribute("data-gameButtonType", "substraction");
    subquiz();
}
    
function setMultiType() {
    ansForm.setAttribute("data-gameButtonType", "multiplication")
    multiquiz();
}  
 
    
function addQuiz() {
    let num1 = Math.floor(Math.random() * 11);
    let num2 = Math.floor(Math.random() * 51);
    
    challenge.textContent = "How much is: " + num1 + " + " + num2 + "?"; 
    
    ansForm["rightAnswer"].value = (num1 + num2);
    }
addQuiz();

function subQuiz() {
    let num1 = Math.floor(Math.random() * 11);
    let num2 = Math.floor(Math.random() * 51);
    
    if (num1 > num2) {
        challenge.textContent = "How much is: " + num1 + " - " + num2 + "?";
        ansForm["rightAnswer"].value = (num1 - num2);
    } else if 
    (num1 < num2) {
        challenge.textContent = "How much is: " + num2 + " - " + num1 + "?";
        ansForm["rightAnswer"].value = (num2 - num1);
        }
    }
subQuiz();

function multiQuiz() {
    let num1 = Math.floor(Math.random() * 11);
    let num2 = Math.floor(Math.random() * 51);
    
    challenge.textContent = "How much is: " + num1 + " * " + num2 + "?";
    
    ansForm["rightAnswer"].value = (num1 * num2);
    }
multiQuiz();

 
 
function checkAnswer() {
    let gameType = ansForm.getAttribute("data-gameButtonType")
    if (ansForm["answer"].value == ansForm["rightAnswer"].value) {
        alert("Correct Answer!");
        score++;
    } else { 
        alert("incorrect Answer! The correct answer is: "+ ansForm["rightAnswer"].value + " Better luck next time!");
        score--;
    }
    scoreResult.textContent = score;
    ansForm["answer"].value = "";
    if (gameType == "addition") {
        addQuiz();
    } else if (
        gameType == "substraction") {
            subquiz();
    } else if (
        gameType == "multiplication") {
            multiquiz();
    }
    return false;
} 
 
   



