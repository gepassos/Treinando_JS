
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
    
}
function getGender() {  
    const genderF = document.querySelector("#radioF").checked;
    const genderM = document.querySelector("#radioM").checked;
    if (genderF) return 'F';
    if (genderM) return 'M';
    return 'M'
}

