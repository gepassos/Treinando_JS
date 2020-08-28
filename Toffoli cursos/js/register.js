function getFormCreatePokemon() {
    const namePokemon = document.getElementById('nomePokemonCadastrado').value;
    const selectType = document.getElementById('selectTipo').value;
    const linkImg = document.getElementById('linkImg').value;
    const textDescription = document.getElementById('textDescription').value;

    let sexo = getGender();

    if (namePokemon && selectType && linkImg && sexo) {

        return { name: namePokemon, img: linkImg, info: textDescription, sexo, type: selectType, id: (getAllInfoImgsPokemons().length + 1) };
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
    let namePokemon = document.getElementById('nomePokemonCadastrado').value
    if (!infoPokemon)
        return alert('Please fill out all the fields correctly')

    setinfoImgsPokemons(infoPokemon)
    myAlert('success', `The Pokemon : ${namePokemon} was sucessfully registered in your list.`, 'alertsRegister')
    clearFormPokemon()



    // window.location.href = 'pokemonManager.html'
}

