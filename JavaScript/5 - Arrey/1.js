const aluno = ["joao","vitor","marina"]
const notas = [5,7,8,2,5]

/*
console.log(aluno)

//indice
console.log(aluno[0])

//add 
aluno.push("paulo")
console.log(aluno)

//POP 
aluno.pop()
console.log(aluno)

*/


var  media = 0;
for(let  index = 0;index<notas.length;index++){
    media += notas[index]
}
console.log(media/notas.length)