const infoImgsPokemons = [
    { name: 'Articuno', img: '../imgs/articuno.jpg', info: ' Articuno is a legendary bird Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall.' },
    { name: 'Dialga', img: '../imgs/dialga.jpg', info: 'A Pokémon spoken of in legend. It is said that time began moving when Dialga was born.' },
    { name: 'Pikachu', img: '../imgs/Pikachu.jpg', info: 'His nature is to store up electricity. Forests where nests of Pikachu live are dangerous, since the trees are so often struck by lightning.' },
    { name: 'Raikou', img: '../imgs/raikou.jpg', info: 'Raikou embodies the speed of lightning. The roars of this Pokémon send shock waves shuddering through the air and shake the ground as if lightning bolts had come crashing down.' },
    { name: 'Gengar', img: '../imgs/gengar.png', info: 'You can hear tales told all over the world about how Gengar will pay a visit to children who are naughty.' },
    { name: 'Charmander', img: '../imgs/Charmander.png', info: 'The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.' },
    { name: 'Charmeleon', img: '../imgs/Charmeleon.png', info: 'Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color..' },
    { name: 'Charizard', img: '../imgs/Charizard.png', info: 'Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.' },
    { name: 'Squirtle', img: '../imgs/Squirtle.png', info: 'Squirtles shell is not merely used for protection.' }
]
function initLocalStorage(infoImgsPokemons) {
    let getLocalstorage = getAllInfoImgsPokemons()
    if (!getLocalstorage) {
        localStorage.setItem('infoImgsPokemons', JSON.stringify(infoImgsPokemons))
        getLocalstorage = getAllInfoImgsPokemons()
    }
    return getLocalstorage
}

function getAllInfoImgsPokemons() {
    const pokemonLocalStorage = localStorage.getItem('infoImgsPokemons')
    if (!pokemonLocalStorage || pokemonLocalStorage == undefined || pokemonLocalStorage == 'undefined') {
        return ''
    }
    return JSON.parse(pokemonLocalStorage)
}

function setinfoImgsPokemons(value) {
    const localStoragePokemon = getAllInfoImgsPokemons()
    localStoragePokemon.push(value)
    localStorage.setItem('infoImgsPokemons', JSON.stringify(localStoragePokemon))
    return localStoragePokemon
}



function setInfoImg() {
    let myHtml = '';
    imgsPokemons = getAllInfoImgsPokemons()
    for (infoPokemon of imgsPokemons) {
        myHtml += `

        
                <p>
                <h4>
                <h2> <font face="Verdana"> ${infoPokemon.name} </h2>
                </h4>
                </p
                
                <p>
                <img src="${infoPokemon.img}" width = 450px height = 350px>
               </p>
                <p>
                <p> <font size="4" face="Verdana"> ${infoPokemon.info}<p>
                </p>
              
                `;
    }
    const elementInfosAnimes = document.getElementById('infosAnimes')
    elementInfosAnimes.innerHTML = myHtml;
}




function removeClassNav() {
    let classRemover = document.querySelectorAll('.active')
    for (let i = 0; i < classRemover.length; i++) {
        classRemover[i].classList.remove('active')
    }
}



function addClassNav(id) {
    const itemMenu = document.getElementById(id)

    itemMenu.classList.add('active')
}


function menuDiv() {
    const textDiv = document.getElementById('menuDiv')
    let divHtml = ` <div class="menuSuperior">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand " href="index.html">Pokemons </a>
        <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a id="home" class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a id="page2" class="nav-link" href="page2.html">Register</a>
                </li>
                <li class="nav-item">
                <a id="editPage" class="nav-link" href="editPage.html">Edit</a>
                </li>
                <li class="nav-item">
                    <a id="deletePage" class="nav-link" href="deletePage.html">Delete</a>
                </li>
               
            </ul>

        </div>
    </nav>
</div>
`

    textDiv.innerHTML = divHtml;
}