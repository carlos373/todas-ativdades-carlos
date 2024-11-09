/*FUNÇÕES*/

//1º Função que não recebe parâmetros e não tem retorno
function soma1(){
    let n1,n2,soma
    n1 = 5
    n2 = 5
    soma = n1 + n2
    console.log(`${soma}`)
}
soma1()
console.log("somando =>", soma1() + 5)

//2º Função que recebe parâmetros/argumentos e não tem retorno
function soma2(parametro1,parametro2){
    let  soma 
    soma = parametro1 + parametro2
    console.log(soma)
}
console.log(` funçãeo com param e sem retorno`)
soma2() // NAN
soma2(4) // NAN
soma2(4,4,4,4,4,4,4,4) // = 8
soma2(4,4) // Retorna a soma
console.log(soma2(4,4) +2) // NAN

console.log(` função com param e retorno`)
function soma3(param1,param2){
    let soma = param1 + param2
    return soma
}
console.log(soma3(10,10))
console.log(soma3(10,10) + 10)

function cadastro(nome,idade,altura){
    if( idade< 18){
console.log(`${nome} com altura ${altura} não tem permissão`)
    }else{
        console.log(`${nome} com altura ${altura} tem premissão`)
    }
}
cadastro("Carlos", 32, 1.75)
cadastro("Vitor", 16, 1.70)