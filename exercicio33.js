/*Escreva um algoritmo que solicite ao usuário a entrada de 5 números, e que exiba o somatório desses números na tela. Após exibir a soma, o programa deve mostrar também os números que o usuário digitou, um por linha.*/


/* 2º questão
let vetor = [];
let soma = 0
//parseFloat(prompt("Digite um valor"))

for(let i = 0; i < 5; i++){
    vetor[i] = Math.floor(Math.random() * 10)
    soma += vetor[i]
}
console.log("Vetor digitado: " + vetor)
console.log("Soma dos valores do vetor: " + soma)*/


/*Crie um programa que solicite a entrada de 10 números pelo usuário, armazenando-os em um vetor, e então monte outro vetor com os valores do primeiro multiplicados por 5. Exiba os valores dos dois vetores na tela, simultaneamente, em duas colunas (um em cada coluna), uma posição por linha.*/

//3º questão 

/*const vetor1 = []
const vetorx5 = []
//vetor01 = 2,3,4
//vetorx1 = 10,15,20

for(let i = 0; i < 10; i++){
    vetor1[i] = Math.floor(Math.random() * 10)
    vetorx5[i] = vetor1[1] * 5
}
console.log("Vetor Digitado: " +vetor1)
console.log("Vetor resultante: "+vetorx5)*/




const vet1 = [];
const vet3 = [];

let j = 0
for (let i = 0; i< 4; i++){
    vet3[j] = vet1[i]
    j++
    vet3[j] = vet2[i]
    j++
}
console.log=(vet1)
console.log(vet2)
console.log(vet3)