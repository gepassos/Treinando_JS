
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



