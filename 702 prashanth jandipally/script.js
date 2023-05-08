const container = document.querySelector('.container');

const URL = 'https://dog.ceo/api/breeds/image/random';

let imageLoad = false;

// get the images

function loadImages(numImages = 10) {
    for (let i = 0; i < numImages; i++) {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                console.log(data.message)
                const img = document.createElement('img');
                img.src = `${data.message}`
                container.appendChild(img)
                img.style.height = "75%";
                img.style.width = "75%";
                img.style.margin = "10px"
            })
       
    }
}
loadImages();
function load() {
    setTimeout(() => {
        loadImages();
        document.querySelector('.loader').classList.add('d-none');
        imageLoad = false;
    }, 1000)
}



// listen for scroll event and load more images if we reach the bottom of window
window.addEventListener('scroll', () => {
    console.log("scrolled", window.scrollY) //scrolled from top
    // console.log(window.innerHeight) //visible part of screen
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight && window.scrollY <= 20000) {
        imageLoad = false;
        document.querySelector('.loader').classList.remove('d-none');
        load()
    }
})

