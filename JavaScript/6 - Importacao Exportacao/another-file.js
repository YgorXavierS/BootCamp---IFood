export default  class Employee{
    nome;
    idade;
    cpf;
    rg;
    
    constructor(nome,idade,cpf){
        this.nome=nome;
        this.idade=idade;
        this.cpf=cpf;
    }
    Descri(){
        console.log(`OLA ${this.nome} com idade de ${this.idade}`)
    }

    VerIdade(){
        if(this.idade <= 18){
            return "Menor de Idade"
        }
        else{
            return "maior de idade"
        }
    }
}
