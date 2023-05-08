var listElm = document.querySelector('#list');
var nextItem = 1;
var loadMore = function () {
    for (var i = 0; i < 10; i++) {
        var item = document.createElement('li');
        item.innerText = ' ' + nextItem++;
        listElm.appendChild(item);
    }
}

listElm.addEventListener('scroll', function () {
    if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        loadMore();
    }
});

loadMore();