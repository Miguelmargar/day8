$(document).ready(function() {
    
    $("button").click(funtion() {
        if ($("img").attr("src") === "img/bulboff.gif") {
                $("img").attr("src", "img/bulbon.gif");
                $("button").text("Switch On");
        }
    })
    
})