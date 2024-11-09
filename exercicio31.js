let numero,e,fatorial = 1;

numero = Number(prompt("Digite um número"))

for( let i= 1 ; i <= numero; i++){
    fatorial = 1
    for(let j = 1; j <= i; j++ ){
        fatorial = fatorial *j

    }
    e = e + 1/fatorial
}

document.write(` Valor final de E = ${e}`)