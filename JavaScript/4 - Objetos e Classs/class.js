/*********************************OBJETO**********************************/
/*
const ygor = {
    nome:"ygor",
    idade:24,
    descrever: function (){
        console.log(`Ola meu nome ${ygor.nome} e tenho da ${ygor.idade}`);
    }

}


ygor.altura = 1.90
/*
console.log(ygor.idade)
console.log(ygor)

//delete ygor.altura

//console.log(ygor)

ygor.descrever()

//CONSTRUTOR



const atr = "idade"
console.log(ygor[atr])


/*********************************CLASS**********************************

const ano  = new Date().getFullYear()

class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
        this.anoDeNascimento  = Math.abs(idade - ano)
    }

    descrever(){
        console.log(`OLA ${this.nome} com idade de ${this.idade} ${this.anoDeNascimento} `)
    }
}

const ygor = new Pessoa("ygor",58)

const paula = new Pessoa("fermanda",88)


ygor.descrever()
paula.descrever()




/*
const ygor =  new Pessoa();
ygor.idade = 10
ygor.nome = "ygor"

const fermando =  new Pessoa();
fermando.idade = 20
fermando.nome = "fermando"

*/



/*********************************EXERCICE CLASS **********************************
const ano  = new Date().getFullYear()

class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
        this.anoDeNascimento  = Math.abs(idade - ano)
    }

    descrever(){
        console.log(`OLA ${this.nome} com idade de ${this.idade} ${this.anoDeNascimento} `)
    }
}

function comperPersom(p1,p2){
    if(p1.idade >= p2.idade){
        console.log(`${p1.nome} is older then ${p2.nome}`)
    }else{
        console.log(`${p2.nome} is older then ${p1.nome}`)
    }
}

var ygor = new Pessoa("ygor",25)
var paulo  = new Pessoa("paulos",58)


comperPersom(ygor,paulo)

*/

//EXERCICIO CLASS
 class Carro{
    marca;
    cor;
    KmMedio;

    constructor(marca,cor,KmMedio){
        this.marca=marca
        this.cor = cor
        this.KmMedio=KmMedio
    }

    KmMedioGasto(KM,preco){
       return (KM*this.KmMedio)*preco
    }
}

let fusca = new Carro("Volkswagen","Vermelha",1/12)
console.log(fusca.KmMedio)
console.log(fusca.KmMedioGasto(70,5.00))