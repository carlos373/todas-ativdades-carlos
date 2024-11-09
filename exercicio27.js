
var N = parseInt(prompt("Digite o número de valores a serem lidos:"));

// intera o N vezes para ler os valores e calcular a fatorial
for (var i = 0; i < N; i++) {
    
    var valor = parseInt(prompt("Digite um valor inteiro e positivo:"));
    
    // inicia a variável para calcular o fatorial
    var fatorial = 1;
    
    // Calcula o fatorial do valor lido
    for (var j = 1; j <= valor; j++) {
        fatorial *= j;
    }
    
    document.write("Valor lido: " + valor + ", Fatorial: " + fatorial);
}
