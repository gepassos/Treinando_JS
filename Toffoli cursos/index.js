const infoImgsAnimes = [
    { name: 'Articuno', imagem: './Imgs/articuno.jpg', informacao: '' },
    { name: 'Dialga', imagem: './Imgs/dialga.jpg', informacao: '' },
    { name: 'Pikachu', imagem: './Imgs/Pikachu.jpg', informacao: '' },
    { name: 'Raikou', imagem: './Imgs/raikou.jpg', informacao: '' },
    { name: 'Gengar,', imagem: './Imgs/gengar.jpg', informacao: '' }
]


function setInfoImg() {
    let myHtml = '';
    for (info of infoImgsAnimes) {
        myHtml += `
                <p>
                <h4>
                <h4>  ${info.name} </h4>
                </h4>
                </p
                <p>
                <img src="${info.imagem}" width = 450px height = 350px>
               </p>
                <p>
                Possui ${info.informacao} informacaos!            
                </p>
              
                `;
    }
    document.getElementById('infosAnimes').innerHTML = myHtml;
}


setInfoImg()

