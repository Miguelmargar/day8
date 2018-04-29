$("document").ready(function() {

let ansForm = $("#answerForm");
    
function add() {
     $("#btnQuestion").click(function() {
        let num1 = Math.floor(Math.random() * 11);
        let num2 = Math.floor(Math.random() * 51);
        $("#question").text("How much is: " + num1 + " + " + num2 + "?");
    });
    ansForm["rightAnswer"].value = (num1 + num2);
};
   
function checkAnswer() {
    if (ansForm["answer"].value == ansForm["rightAnswer"].value) {
        alert("Correct Answer!");
    } else {
        alert("incorrect Answer! Better luck next time!");
    };
    ansForm["answer"].value = "";
}
   
    
})
