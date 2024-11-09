// Dados dos operários(id)
var operarios = [
    { id: 1, pecas: 25, sexo: 'M' },
    { id: 2, pecas: 18, sexo: 'F' },
    { id: 3, pecas: 35, sexo: 'M' },
    { id: 4, pecas: 40, sexo: 'F' },
    { id: 5, pecas: 22, sexo: 'M' },
    { id: 6, pecas: 15, sexo: 'F' },
    { id: 7, pecas: 28, sexo: 'M' },
    { id: 8, pecas: 32, sexo: 'F' },
    { id: 9, pecas: 10, sexo: 'M' },
    { id: 10, pecas: 45, sexo: 'F' },
    { id: 11, pecas: 20, sexo: 'M' },
    { id: 12, pecas: 30, sexo: 'F' },
    { id: 13, pecas: 25, sexo: 'M' },
    { id: 14, pecas: 35, sexo: 'F' },
    { id: 15, pecas: 50, sexo: 'M' }
];

var salarioMinimo = 1000; // Exemplo de salário mínimo
var totalFolhaPagamento = 0;
var totalPecas = 0;
var totalPecasHomens = 0;
var totalPecasMulheres = 0;
var numHomens = 0;
var numMulheres = 0;
var maiorSalario = 0;
var operarioMaiorSalario = null;

for (var i = 0; i < operarios.length; i++) {
    var operario = operarios[i];
    var salario = salarioMinimo;

    if (operario.pecas > 30) {
        salario += (operario.pecas - 30)*(0.05 * salarioMinimo);
    } else if (operario.pecas > 20) {
        salario += (operario.pecas - 20) * (0.03 * salarioMinimo);
    }

    document.write("Operário" + operario.id + " -Salário: R$" + salario.toFixed(2));

    totalFolhaPagamento += salario;
    totalPecas += operario.pecas;

    if (operario.sexo === 'M') {
        totalPecasHomens += operario.pecas;
        numHomens++;
    } else {
        totalPecasMulheres += operario.pecas;
        numMulheres++;
    }

    if (salario > maiorSalario) {
        maiorSalario = salario;
        operarioMaiorSalario = operario.id;
    }
}

var mediaPecasHomens = totalPecasHomens / numHomens;
var mediaPecasMulheres = totalPecasMulheres / numMulheres;

document.write("Total da folha de pagamento: R$" + totalFolhaPagamento.toFixed(2));
document.write("Número total de peças fabricadas: " + totalPecas);
document.write("Média de peças fabricadas pelos homens: " + mediaPecasHomens.toFixed(2));
document.write("Média de peças fabricadas pelas mulheres: " + mediaPecasMulheres.toFixed(2));
document.write("Operário de maior salário: " + operarioMaiorSalario);