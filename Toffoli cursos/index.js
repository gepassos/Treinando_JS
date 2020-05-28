const infoImgsAnimes = [
    { name: 'Articuno', imagem: './Imgs/articuno.jpg', informacao: ' Articuno is a legendary bird Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall.' },
    { name: 'Dialga', imagem: './Imgs/dialga.jpg', informacao: 'A Pokémon spoken of in legend. It is said that time began moving when Dialga was born.' },
    { name: 'Pikachu', imagem: './Imgs/Pikachu.jpg', informacao: 'his nature is to store up electricity. Forests where nests of Pikachu live are dangerous, since the trees are so often struck by lightning.' },
    { name: 'Raikou', imagem: './Imgs/raikou.jpg', informacao: 'Raikou embodies the speed of lightning. The roars of this Pokémon send shock waves shuddering through the air and shake the ground as if lightning bolts had come crashing down.' },
    { name: 'Gengar', imagem: './Imgs/gengar.png', informacao: 'You can hear tales told all over the world about how Gengar will pay a visit to children who are naughty.' },
    { name: 'Charmander', imagem: './Imgs/Charmander.png', informacao: 'The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.' },
    { name: 'Charmeleon,', imagem: './Imgs/Charmeleon.png', informacao: 'Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color..' },
    { name: 'Charizard', imagem: './Imgs/Charizard.png', informacao: 'Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.' },
    { name: 'Squirtle', imagem: './Imgs/Squirtle.png', informacao: 'Squirtles shell is not merely used for protection.' },
]

function setInfoImg() {
    let myHtml = '';
    for (info of infoImgsAnimes) {
        myHtml += `
                <p>
                <h4>
                <h2> <font face="Verdana"> ${info.name} </h2>
                </h4>
                </p
                <p>
                <img src="${info.imagem}" width = 450px height = 350px>
               </p>
                <p>
                <p> <font size="4" face="Verdana"> ${info.informacao}<p>
                </p>
              
                `;
    }
    document.getElementById('infosAnimes').innerHTML = myHtml;
}


setInfoImg()

