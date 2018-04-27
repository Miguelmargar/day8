$(document).ready(function() {
    
    $(".lightOn").click(function() {
         $("#bulbImage").attr("src", "../img/bulbon.gif");
         $("h2").text("Switch the light OFF please");
    });
    
    $(".lightOff").click(function() {
        $("#bulbImage").attr("src", "../img/bulboff.gif");
        $("h2").text("Switch the light ON please");
    })
    
})