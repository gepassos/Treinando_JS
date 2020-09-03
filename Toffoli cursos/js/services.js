
function getAllInfoImgsPokemons() {
    const pokemonLocalStorage = localStorage.getItem('infoImgsPokemons')
    if (!pokemonLocalStorage || pokemonLocalStorage == undefined || pokemonLocalStorage == 'undefined') {
        return ''
    }
    return JSON.parse(pokemonLocalStorage)
}

function setinfoImgsPokemons(value) {
    const localStoragePokemon = getAllInfoImgsPokemons()
    localStoragePokemon.push(value)
    localStorage.setItem('infoImgsPokemons', JSON.stringify(localStoragePokemon))
    return localStoragePokemon
}



function dataValidation(data) {
    if (!data) return ''
    return data
}

function edit(itemPokemon, id) {
    const infoImgsPokemons = getAllInfoImgsPokemons()
    let infoPokemon = infoImgsPokemons[id]
    infoPokemon.name = ''
    infoImgsPokemons[id] = infoPokemon
    localStorage.setItem('infoImgsPokemons', JSON.stringify(infoImgsPokemons))
}

function filterOnChange() {
    const infoImgsPokemons = getAllInfoImgsPokemons()
    const infoPokemonUpper = infoImgsPokemons.map(pokemon => {
        pokemon.name = pokemon.name.toUpperCase();
        return pokemon;
    })
    var key = document.getElementById('nameTyped').value.toUpperCase();
    var result = infoPokemonUpper.filter(item => item.name.includes(key));

    return result.map(pokemon => {
        pokemon.name = pokemon.name.toLowerCase()
        pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        return pokemon;
    })


}

function clearFilter() {
    document.getElementById('nameTyped').value = ''
}
function getGender() {
    const genderF = document.querySelector("#radioF").checked;
    const genderM = document.querySelector("#radioM").checked;
    if (genderF) return 'F';
    if (genderM) return 'M';
    return 'M'
}


function carousel() {
    imgsPokemons = getAllInfoImgsPokemons()
    const elementoCarousel = document.getElementById('divCarousel')
    let myHtml = `
    <div id="myCarousel" class="carousel slide" data-ride="carousel">

    <div class="carousel-inner">

        <div class="carousel-item active">
            <img src="https://upload.wikimedia.org/wikipedia/en/1/1f/Pok%C3%A9mon_Charizard_art.png"
                class="img-fluid d-block">
        </div>

        <div class="carousel-item">
            <img src="https://vignette.wikia.nocookie.net/pokemonet/images/2/21/001Bulbasaur.png/revision/latest/scale-to-width-down/340?cb=20130504203725&path-prefix=pt-br"
                class="img-fluid d-block">
        </div>

        <div class="carousel-item">
            <img src="" class="img-fluid d-block">
        </div>

    </div>


    <a class="carousel-control-prev" href="#divCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
        <span class="sr-only">Prev</span>
    </a>

    <a class="carousel-control-next" href="#divCarousel" role="button" data-slide="next">

        <span class="carousel-control-next-icon"></span>
        <span class="sr-only">Next</span>
    </a>

</div>
    `;

    elementoCarousel.innerHTML = myHtml;
}
