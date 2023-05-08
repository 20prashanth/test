$(document).ready(function(){
    $("#top").click(function(){
        $("#down").slideDown(3000);
        $("#own").slideDown(3000);
    });
    $("button").click(function(){
        $("#down").stop();
        $("#own").stop();
        alert("the sliding image and paragraph has stopped");
    });   
});
