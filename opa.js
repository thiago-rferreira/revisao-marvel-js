let forcaThor = 150;
let forcaHulk = 100;

//Soma
let somaForca =  forcaHulk + forcaThor;
console.log('Força Total', somaForca);

//Subtracao
let diferencaForca = forcaHulk - forcaThor;
console.log('Diferença de Força', diferencaForca);

//Multiplicacao
let multiplicacaoForca = forcaHulk * forcaThor;
console.log('Multiplicação de Força', multiplicacaoForca);

//Divisao
let divisaoForca = forcaHulk / forcaThor;
//Posso arredondar o resultado para baixo com Math.floor
console.log('Divisão de Força', Math.floor(divisaoForca));

//Tambem temos os de comparação

let forcaThorMaior = forcaThor > forcaHulk;
console.log('Thor é mais forte que Hulk?', forcaThorMaior);

let forcaThorMenor = forcaThor < forcaHulk;
console.log('Thor é mais fraco que Hulk?', forcaThorMenor);

let forcaThorIgual = forcaThor == forcaHulk;
console.log('Thor é igual a Hulk?', forcaThorIgual);

// Tambem temos os comparadores maior e igual 
let forcaThorMaiorIgual = forcaThor >= forcaHulk;
console.log('Thor é maior ou igual a Hulk?', forcaThorMaiorIgual);