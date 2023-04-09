/*function get(){
    return 10
}

function print(text){
    console.log(text);
}
*/

let maior =0
function RetornMaior(arrey){
    for(var i=0;i<arrey.length;i++){
        if(arrey[i]> maior){
            maior = arrey[i];
        }
    }
    return maior;
}
module.exports = {RetornMaior}


