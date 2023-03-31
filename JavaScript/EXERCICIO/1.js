let notas = [];

notas[0]=5  
notas[1]=9
notas[2]=8

var reprovacao = null
var aprovacao = null
var recuperar = null

var media = (notas[0]+notas[1]+notas[2])/3
if(media < 5){
    reprovacao = true
    console.log(`A MEDIA E DE ${media.toFixed(2)} --> REPROVADO `)
}
else if(media > 5 && media <7){
    console.log(`A MEDIA E DE ${media.toFixed(2)} --> RECUPAÇÃO MEU JOVEM `)
    recuperar = true
}
else{
    console.log(`A MEDIA E DE ${media.toFixed(2)} --> FERIAS CANTOS `)
    aprovacao =true
}
