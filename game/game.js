// Declaracao de variaveis dos herois
let capitaoAmericaVida = 100;
let homemdeFerroVida = 100;

//Controle do jogo
let rodada = 1;

// Controle dos ataques
let ataqueCapitaoAmerica = 0;
let ataqueHomemdeFerro = 0;


// Enquanto os dois estiverem vivos, faça a luta.
while (capitaoAmericaVida > 0 && homemdeFerroVida > 0 ) {
    console.log("🔁 Rodada", rodada);

    //Gerar golpes aleatorios.
    ataqueCapitaoAmerica = Math.floor(Math.random() * 20);
    ataqueHomemdeFerro = Math.floor(Math.random() * 20);

    //Aplicar os golpes
    capitaoAmericaVida = capitaoAmericaVida - ataqueHomemdeFerro;
    homemdeFerroVida = homemdeFerroVida - ataqueCapitaoAmerica;

    //Exibir info de ataque
    console.log("🛡️ Capitão América deu", ataqueCapitaoAmerica, "de dano!");
    console.log("🤖 Homem de Ferro deu", ataqueHomemdeFerro, "de dano!");

    //Mostrar a vida de cada um
    console.log("❤️ Vida do homem de ferro: ", homemdeFerroVida);
    console.log("⚡ Vida do capitao america: ", capitaoAmericaVida);
    console.log("--------------------------------");

    //Ir para proxima rodada
    rodada++;
}

//Calcular os resultados
if (capitaoAmericaVida <= 0 && homemdeFerroVida <= 0) {
    console.log("😱 Empate! Os dois foram pro chão ao mesmo tempo!");
} else if (capitaoAmericaVida > homemdeFerroVida){
    console.log("🏆 Capitão América venceu com honra!");
} else {
    console.log("🏆 Homem de Ferro venceu com estilo!");
}