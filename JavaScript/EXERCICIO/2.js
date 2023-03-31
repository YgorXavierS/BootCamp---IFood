//IMC

//var imc = peso/(altura*altura)

let peso = 80
let altura = 2.03
var imc = peso/(Math.pow(altura,2)).toFixed(1)
var imcTipe = null

if(imc< 18.5){
    imcTipe = "abaixo do peso"
}else if(imc > 18.5 && imc < 25){
    imcTipe = "normal"
}
else if(imc > 25 && imc < 30){
    imcTipe = "acima do peso"
}
else if(imc > 30 && imc < 40){
    imcTipe = "obeso"
}
else if(imc > 40){
    imcTipe = "obeso grave"
}

console.log(imcTipe)