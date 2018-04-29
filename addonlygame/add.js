$("document").ready(function() {
    
let checkAnswer = $("#answerForm")

     $("#btnQuestion").click(function() {
          let num1 = Math.floor(Math.random() * 11);
          let num2 = Math.floor(Math.random() * 51);
        $("#question").text("How much is: " + num1 + " + " + num2 + "?");
    });
    
})

function ckAnswer() {
    if (checkAnswer["answer"].value === checkAnswer["rightAnswer"].value){
            alert("Right Answer!")
        } else { 
            alert("wrong Answer! Better Luck Next Time!")
}