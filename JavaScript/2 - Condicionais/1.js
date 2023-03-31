/*

Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
'''

*/

var priceEtanol = 3.25;
//PREÇO ETANOL HOJE: 3.25

var priceGasoline = 5.08;
//PRECO GASOLINE HOJE: 5.08

var typeCombustive ="gasolina";

var avg = 12;
var distance = 1580;

if(typeCombustive === "etanol"){
    var priceTrip = (distance/avg)*priceEtanol;
}

else if(typeCombustive === "gasolina"){
    var priceTrip = (distance/avg)*priceGasoline;
}

console.log(priceTrip.toFixed(2))

