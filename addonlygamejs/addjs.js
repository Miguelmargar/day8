let ansForm = document.getElementById("answerForm")
let challenge = document.getElementById("question");
    
function addQuiz() {
    let num1 = Math.floor(Math.random() * 11);
    let num2 = Math.floor(Math.random() * 51);
    
    challenge.textContent = "How much is: " + num1 + " + " + num2 + "?";
    
    ansForm["rightAnswer"].value = (num1 + num2);
    }
addQuiz();
   /*
function checkAnswer() {
    if (ansForm["answer"].value == ansForm["rightAnswer"].value) {
        alert("Correct Answer!");
    } else {
        alert("incorrect Answer! Better luck next time!");
    }
    ansForm["answer"].value = "";
}
   */ 
