function pokemonRemover() {
    const infoImgsPokemons = getAllInfoImgsPokemons()
    let nameTypedId = document.getElementById('nameTyped').value
    for (let i = 0; i < infoImgsPokemons.length; i++) {
        if (infoImgsPokemons[i].name == nameTypedId) {
            infoImgsPokemons.splice(i, 1)
            localStorage.setItem('infoImgsPokemons', JSON.stringify(infoImgsPokemons))
            myAlert('success', `The Pokemon : ${nameTypedId} was sucessfully deleted from your list.`, 'alertsExclude')

            listToExclude()
        }

    }

    document.getElementById('nameTyped').value = '';


}
function pokemonRemoverById(id, name) {
    const infoImgsPokemons = getAllInfoImgsPokemons()
    infoImgsPokemons.splice(id, 1)
    localStorage.setItem('infoImgsPokemons', JSON.stringify(infoImgsPokemons))
    myAlert('success', `The Pokemon : ${name} was sucessfully deleted from your list.`, 'alertsExclude')
    listToExclude()

}


function listToExclude() {
    // {"name":"Gustavo","img":"","info":"dcasdsadsa sd sdsa","sexo":"F","type":"tipoNormal"}

    const imgsPokemons = getAllInfoImgsPokemons()
    const headerHtml = `
    <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Info</th>
            <th scope="col">Sexo</th>
            <th scope="col">Type</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
    `
    let myHtml = headerHtml;
    const footerHtml = ` </table>`
    for (index in imgsPokemons) {

        myHtml += `
          <tr>
            <td>${parseInt(index) + 1}</td>
            <td>${index}</td>
            <td><img src="${dataValidation(imgsPokemons[index].img)}" width="90px" ></td>
            <td>${dataValidation(imgsPokemons[index].name)}</td>
            <td>${dataValidation(imgsPokemons[index].info.substring(0, 20))}...</td>
            <td>${dataValidation(imgsPokemons[index].sexo)}</td>
            <td>${dataValidation(imgsPokemons[index].type)}</td>
            <td><button onclick="pokemonRemoverById(${index}, ${imgsPokemons[index].name})" class="btn btn-danger" value="Delete">Delete</button></td>
            <td><button onclick="urlGetId(${index})" class="btn btn-danger" value="Edit">Edit</button></td>
          </tr>
                `;


    }
    myHtml += footerHtml;
    const elementInfosAnimes = document.getElementById('listToRemove');
    elementInfosAnimes.innerHTML = myHtml;


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