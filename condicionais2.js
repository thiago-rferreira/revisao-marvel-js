let identidade = 'Barry Allen';

switch (identidade){
    case 'Peter Parker':
        console.log('Eu sou o Homem-Aranha');
        break;
    case 'Clark Kent':
        console.log('Eu sou o Superman');
        break;
    case 'Bruce Wayne':
        console.log('Eu sou o Batman');
        break;
    case 'Diana Prince':
        console.log('Eu sou a Mulher Maravilha');
        break;
    case 'Barry Allen':
        console.log('Eu sou o Flash');
        break;
    default:
        console.log('Identidade desconhecida');
}

// Com numeros
let numero = 10;
let operador = '+';
let numero2 = 5;
let resultado;

switch (operador) {
    case '+':
        resultado = numero + numero2;
        break;
    case '-':
        resultado = numero - numero2;
        break;
    case '*':
        resultado = numero * numero2;
        break;
    case '/':
        resultado = numero / numero2;
        break;
    default:
        console.log('Operador inválido');
}


// Condicional com ternário
let idade = 18;
let podeDirigir = (idade >= 18) ? 'Pode dirigir' : 'Não pode dirigir';
console.log(podeDirigir);