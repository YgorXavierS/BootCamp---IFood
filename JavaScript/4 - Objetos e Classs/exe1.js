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

console.log(fusca.KmMedioGasto(70,5.00))