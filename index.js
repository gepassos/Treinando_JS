class Myclass {

    constructor(nome=5959){
        this.nome = nome;
    }

    test(param) {
        console.log(`breiiii`, param);
    }
    
    test2() {
        console.log(`breiiii`, this.nome);
    }

}