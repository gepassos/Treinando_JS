


function getFormCreatePokemon() {
    const namePokemon = document.getElementById('nomePokemonCadastrado').value;
    const selectType = document.getElementById('selectTipo').value;
    const linkImg = document.getElementById('linkImg').value;
    const textDescription = document.getElementById('textDescription').value;
    const radioM = document.getElementById('radioM').value;
    const radioF = document.getElementById('radioF').value;
    let sexo;
    if (radioF) sexo = radioF
    else if (radioM) sexo = radioM
    if (namePokemon && selectType && linkImg && sexo) {
        console.log({ name: namePokemon, img: linkImg, info: textDescription, sexo, type: selectType });

        return { name: namePokemon, img: linkImg, info: textDescription, sexo, type: selectType };
    }
    return false;
}

function clearFormPokemon(){
    document.getElementById('nomePokemonCadastrado').value = ''
    document.getElementById('selectTipo').value = ''
    document.getElementById('linkImg').value = ''
    document.getElementById('textDescription').value = ''
    
}

function cadastrarPokemon() {
    const infoPokemon = getFormCreatePokemon()
    if (!infoPokemon)
        return alert('Preencha todos os campos')

    setinfoImgsPokemons(infoPokemon)
    clearFormPokemon()
}

