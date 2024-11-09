
var numero = parseInt(prompt("Digite um número:"));

// variável para indicar se o número é primo
var Primo = true;

// Verifica se o número é menor que 2, pq números menor que 2 n é primo
if (numero < 2) {
    Primo = false;
} else {
    for (var i = 2; i < numero; i++) {
        // Verifica se o número é divisível por i
        if (numero % i === 0) {
            // válido a var "primo"
            Primo = false;
            break;
        }else{
            continue
        }
    }
}

if (Primo) {
    document.write(numero + " é um número primo.");
} else {
    document.write(numero + " não é um número primo.");
}
