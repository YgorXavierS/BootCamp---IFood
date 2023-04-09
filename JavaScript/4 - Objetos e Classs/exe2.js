class Pessoa{
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

const ygor = new Pessoa("ygor xavier",120,2.03);

console.log(ygor.imcCalc())