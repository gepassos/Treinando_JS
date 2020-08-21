function getFormCreatePokemon() {
    const namePokemon = document.getElementById('nomePokemonCadastrado').value;
    const selectType = document.getElementById('selectTipo').value;
    const linkImg = document.getElementById('linkImg').value;
    const textDescription = document.getElementById('textDescription').value;

    let sexo = getGender();

    if (namePokemon && selectType && linkImg && sexo) {
        console.log({ name: namePokemon, img: linkImg, info: textDescription, sexo, type: selectType });

        return { name: namePokemon, img: linkImg, info: textDescription, sexo, type: selectType };
    }

    return false;
}

function clearFormPokemon() {
    document.getElementById('nomePokemonCadastrado').value = ''
    document.getElementById('selectTipo').value = ''
    document.getElementById('linkImg').value = ''
    document.getElementById('textDescription').value = ''

}

function cadastrarPokemon() {
    const infoPokemon = getFormCreatePokemon()
    if (!infoPokemon)
        return alert('Please fill out all the fields correctly')

    setinfoImgsPokemons(infoPokemon)
    clearFormPokemon()
    // window.location.href = 'pokemonManager.html'
}

