let slider = document.getElementById('divCarousel')
let lastImages = infoImgsPokemons.length - 2

function carousel() {

    imgsPokemons = getAllInfoImgsPokemons()
    lastImages = imgsPokemons.length - 2
    carregarImgs(imgsPokemons[lastImages].img)
}

function carregarImgs(img) {
    let alter = slider.style.background = `url(${img})`
    alter.width
}

function imgsSlider() {

    imgsPokemons = getAllInfoImgsPokemons()
    if (imgsPokemons.length <= 3) {
        alert('Não há 3 pokemons cadastrados ainda.')
    }
    if (imgsPokemons.length > 3) {

    }
}