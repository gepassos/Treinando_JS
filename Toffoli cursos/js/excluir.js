function pokemonRemover() {
    let nameTypedId = document.getElementById('nameTyped').value
    for (let i = 0; i < infoImgsPokemons.length; i++) {
        if (infoImgsPokemons[i].name == name) {
            infoImgsPokemons.splice(nameTypedId, 1)
            window.alert(`The Pokemon : ${name} was sucessfully deleted from your list.`)
            return infoImgsPokemons;
        }

    }

}





/*function pokemonRemover() {

    let nameTypedId = document.getElementById('nameTyped')
    this.pokemonNameSearch(nameTypedId)
    infoImgsPokemons.splice(nameTypedId, 1)

}

// Não está sendo utilizada.
function pokemonNameSearch(name) {

    for (let i = 0; i < infoImgsPokemons.length; i++) {
        if (infoImgsPokemons[i].name == name) {
            return i;
        }
    }
}

*/