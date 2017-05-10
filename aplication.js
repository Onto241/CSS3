$(document).ready(function(){
    var classes = ["crosswise", "height", "spin"];
    $("div").click(function() {
        $(this).toggleClass(classes[~~(Math.random()*classes.length)]);
    });
});