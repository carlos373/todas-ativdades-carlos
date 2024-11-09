let tempoAnual = []
let mediaTemp, acumuladora = 0

// 1º Armazenar dados na estrutura de dados -> ARRAY (VETOR)
 for(let i = 0; i < 12; i++){
     tempoAnual[i] =  Number(prompt("Digite a temperatura do mês"))
}

//2º Mostrar/ processar os valores do array de forma individual
for(let i = 0; i< tempoAnual.length;i++){
    acumuladora = acumuladora + tempoAnual[i]
}
//mediaTemp = acumuladora / 12
mediaTemp = acumuladora / tempoAnual.length
console.log( typeof acumuladora) // Objeto
console.log( typeof 12) //Number
console.log(mediaTemp)
document.write(` <p> TempAnual: ${tempoAnual}</p>`)
document.write(` <p> Média da  TempAnual: ${mediaTemp}</p>`)