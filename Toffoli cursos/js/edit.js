function pokemonEditGetInfo(name, newName, newInfo, newImg, newType, newGender) {
    window.location.href = './edit.html';
    let pokemonEdit = document.getElementById('nameTypedEdit').value = name;
    let getName = document.getElementById('newNome').value = newName;
    let getInfo = document.getElementById('newInfo').value = newInfo;
    let getImg = document.getElementById('newImg').value = newImg;
    let getType = document.getElementById('selectTypeEdit').value = newType;
    let getGender = auxGetGender();
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