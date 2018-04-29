$(document).ready(function() {
    
    $("button").click(function() {
        if ($("img").attr("src") === "../img/bulboff.gif") {
                $("img").attr("src", "../img/bulbon.gif");
                $("button").text("Switch Off");
                $("h2").text("Switch the light off please");
        } else if (
            $("img").attr("src") === "../img/bulbon.gif") {
                $("img").attr("src", "../img/bulboff.gif");
                $("button").text("Switch On");
                $("h2").text("Switch the light on please");  
            };
    });
})