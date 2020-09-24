function urlGetId(id) {
    window.location.href = `./edit.html?id=${id}`;
}


function autoFillEditForm() {
    const infoImgsPokemons = getAllInfoImgsPokemons()
    document.getElementById('pokemonNameEdit').value = infoImgsPokemons[id].name
    document.getElementById('nameTypedEdit').value = infoImgsPokemons[id].name
    document.getElementById('selectTypeEdit').value = infoImgsPokemons[id].type
    document.getElementById('textDescription').value = infoImgsPokemons[id].info
    document.getElementById('linkImg').value = infoImgsPokemons[id].img
    if (infoImgsPokemons[id].sexo == 'F') {
        document.querySelector("#radioF").checked = true
    }
    if (infoImgsPokemons[id].sexo == 'M') {
        document.querySelector("#radioM").checked = true
    }
}


function edit(id) {
    const infoImgsPokemons = getAllInfoImgsPokemons()
    let infoPokemon = infoImgsPokemons[id]
    infoPokemon.name = document.getElementById('nameTypedEdit').value
    infoPokemon.type = document.getElementById('selectTypeEdit').value
    infoPokemon.info = document.getElementById('textDescription').value
    infoPokemon.sexo = getGender()

    infoPokemon.img = document.getElementById('linkImg').value
    infoImgsPokemons[id] = infoPokemon
    localStorage.setItem('infoImgsPokemons', JSON.stringify(infoImgsPokemons))

    window.location.href = `pokemonManager.html?id=${id}`


}



function auxGetGender() {
    let radio = document.getElementsByName('sexo');

    for (let i = 0; i < radio.length; i++) {

        if (radio[i].checked) {
            return radio[i].value
        }
    }

}

function pokemonEditButton() {
    for (let i = 0; i < infoImgsPokemons.length; i++) {
        if (infoImgsPokemons[i].name == pokemonName) {
            infoImgsPokemons.splice(i, 1, newName)
        }
    }
}

function disableEdit() {
    if (idDisabled == 'true') {
        document.querySelector("#nameTypedEdit").disabled = true
        document.querySelector("#pokemonNameEdit").disabled = true
        document.querySelector("#selectTypeEdit").disabled = true
        document.querySelector("#radioM").disabled = true
        document.querySelector("#radioF").disabled = true
        document.querySelector("#textDescription").disabled = true
        document.querySelector("#linkImg").disabled = true
        document.querySelector("#editButton").disabled = true
        enableEditButton()
    }


}

function enableEditButton() {
    const myHtml = `<button id="enableEdit" style="margin-left: 15px;" required class="btn btn-primary btn-lg button-cadastrar"
onclick="enableEdit()">Enable Edit</button>`

    const myDiv = document.getElementById("enableEdit")

    myDiv.innerHTML = myHtml;


}

function enableEdit() {
    window.location.href = `./edit.html?id=${id}`
}

function pokeImg() {
    let imagem = document.querySelector("#linkImg").value
    document.getElementById("pokeImg").src = imagem
}

/*

 let pokemonEdit = document.getElementById('nameTypedEdit').value = name;
    let getName = document.getElementById('newNome').value = newName;
    let getInfo = document.getElementById('newInfo').value = newInfo;
    let getImg = document.getElementById('newImg').value = newImg;
    let getType = document.getElementById('selectTypeEdit').value = newType;
    let getGender = auxGetGender();
    */