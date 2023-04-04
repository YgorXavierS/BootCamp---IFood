class Pessoas{
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso =peso;
        this.altura = altura;
    }
    imcCalc(){
        return(this.peso/(Math.pow(this.altura,2)))
    }
     
}

