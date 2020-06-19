function cadastrarPokemon(nomePokemon) {

    nomePokemon = document.getElementById("nomePokemonCadastrado").value


    if (nomePokemon == '') {
        alert('Nome não cadastrado')

    }
    if (nomePokemon !== '') {
        alert(`${nomePokemon} Foi cadastrado.`)
        return infoImgsPokemons.push({ name: nomePokemon })
    }


}

