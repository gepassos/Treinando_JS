function urlGetId(id) {
    window.location.href = `./edit.html?id=${id}`;
}


function autoFillEditForm() {
    const infoImgsPokemons = getAllInfoImgsPokemons()
    document.getElementById('pokemonNameEdit').value = infoImgsPokemons[id].name
    document.getElementById('nameTypedEdit').value = infoImgsPokemons[id].name
    document.getElementById('selectTypeEdit').value = infoImgsPokemons[id].type
    document.getElementById('textDescription').value = infoImgsPokemons[id].info
    document.getElementById('linkImg').value = infoImgsPokemons[id].linkImg
}


function edit(itemPokemon, id) {
    const infoImgsPokemons = getAllInfoImgsPokemons()
    let infoPokemon = infoImgsPokemons[id]
    infoImgsPokemons[id] = infoPokemon
    infoPokemon.name = document.getElementById('nameTypedEdit').value
    infoPokemon.type = document.getElementById('selectTypeEdit').value
    infoPokemon.info = document.getElementById('textDescription').value
    infoPokemon.linkImg = document.getElementById('linkImg').value

    localStorage.setItem('infoImgsPokemons', JSON.stringify(infoImgsPokemons))
    // window.location.href = 
}

function getGender() {
    document.querySelector("#radioF").value
    document.querySelector("#radioM").value

    if (infoImgsPokemons[id].sexo == '' || infoImgsPokemons[id].sexo == undefined) {

    }


    if (infoImgsPokemons[id].sexo == 'F') {
        document.querySelector("#radioF").checked = true
    }
    if (infoImgsPokemons[id].sexo == 'M') {
        document.querySelector("#radioM").checked = true
    }
}



/*function auxGetGender() {
    let radio = document.getElementsByName('sexo');

    for (let i = 0; i < radio.length; i++) {

        if (radio[i].checked) {
            return radio[i].value
        }
    }

}
*/
function pokemonEditButton() {
    for (let i = 0; i < infoImgsPokemons.length; i++) {
        if (infoImgsPokemons[i].name == pokemonName) {
            infoImgsPokemons.splice(i, 1, newName)
        }
    }
}

/*

 let pokemonEdit = document.getElementById('nameTypedEdit').value = name;
    let getName = document.getElementById('newNome').value = newName;
    let getInfo = document.getElementById('newInfo').value = newInfo;
    let getImg = document.getElementById('newImg').value = newImg;
    let getType = document.getElementById('selectTypeEdit').value = newType;
    let getGender = auxGetGender();
    */