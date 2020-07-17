
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



function dataValidation(data){
    if(!data) return ''
    return data
}