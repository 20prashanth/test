var btn= document.getElementsByTagName('button');

btn.addEventListener('click', function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-2.json')
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
});


function renderHTML(){
    var htmlString = " ";

    for(i=0 ; i<DataTransfer.length; i++){
        htmlString += "<p>" +data[i].name + "is a" + data[i].spices;
    }
}