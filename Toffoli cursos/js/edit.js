function pokemonEdit() {
    let pokemonName = document.getElementById('nameTyped').value
    let newName = document.getElementById('newNome').value
    let newInfo = document.getElementById('newInfo').value
    let newImg = document.getElementById('newImg').value
    for (let i = 0; i < infoImgsPokemons.length; i++) {
        if (infoImgsPokemons[i].name == pokemonName) {
            infoImgsPokemons.splice(i, 1, newName)
        }
    }
}