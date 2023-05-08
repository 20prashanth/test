$(document).ready(function(){
    $("#btn").click(function(){
        $("p").append(" welcome");
    });
    $("#btn1").click(function(){
        $("ol").append("<li>4</li>");
    });
    $("#btn2").click(function(){
        $("div").remove();
    });
});

$(document).ready(function(){
    $("span").parent().css({"color": "red", "border": "2px solid red"});
  });