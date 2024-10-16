//ex-1
let nome1 = "jose"
function saudacao (nome1){
    console.log(`teste, ${nome1}`);
    return;    
}

let teste = saudacao(nome1)

console.log(teste)

//ex-2

let nume1 = 50
let nume2 = 51
 function soma(){
    console.log(nume1 + nume2)
    return
 }
 console.log(soma(nume1, nume2))

 //ex-3

 function parOUimpar (num){
    if (num % 2 == 0) {
        return "par"
} else {
    return "ímpar"}
}
console.log(parOUimpar(9));

//ex-4

function multiplica(){
    let mul1 = 10
    let mul2 = 20
    console.log(mul1*mul2)
}
console.log(multiplica())

//ex-5

function  conversao (C){
    
    return C * 1.8 + 32
}

console.log (conversao(35));

//ex-6

function media (a, b, c){
    return (a + b + c) /  3
}

console.log(media(10, 7, 8))

//ex-7

function minutosSegundos ( minutos){

    return minutos * 60
}
console.log(minutosSegundos(2))

//ex-8

 function ehPositivo (norp){
    if (norp > 0){ return "positivo"}
else{
    return "negativo"
}
 }
 console.log(ehPositivo(-5));

 //ex-9

 function repeatWord(bara){
 return bara.repeat(5)
 }
 console.log(repeatWord("frango "))

 //ex-10

 function area(){
    let altura = 10
    let base = 19
    console.log(base*altura)
}console.log(area()) 

//ex-1