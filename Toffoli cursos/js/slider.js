let time = 5000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
max = images.length;

function nextImage() {

    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex].classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)

let slider = document.getElementById('divCarousel')
let lastImages = infoImgsPokemons.length - 2




function carousel() {
    let imgsPokemons = getAllInfoImgsPokemons()

    let imageOne = imgsPokemons.length - 1
    let imageTwo = imgsPokemons.length - 2
    let imageThree = imgsPokemons.length - 3

    document.querySelector("#imageOne").src = imgsPokemons[imageOne].img
    document.querySelector("#imageTwo").src = imgsPokemons[imageTwo].img
    document.querySelector("#imageThree").src = imgsPokemons[imageThree].img


}

