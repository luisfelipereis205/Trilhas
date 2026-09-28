const prompt = require("prompt-sync")();

let nome = prompt("Digite o nome do jogador: ");
let pontuacao = parseInt(prompt("Digite a pontuação do jogador: "));
const pontuacaoMinima = 1000;


console.log("----------ANALISE DE PONTUAÇÃO----------");

if (isNaN(pontuacao)) {
    console.log("A pontuação digitada não é um número válido. Por favor, insira um valor numérico.");
} else {
    if (pontuacao >= pontuacaoMinima) {
        console.log(`Parabéns ${nome}, você atingiu a pontuação mínima para entrar no ranking!`);
        } else {
    pontosNecessarios = pontuacaoMinima - pontuacao;
    console.log(`Você precisa de mais ${pontosNecessarios} pontos para entrar no ranking!`);
    console.log(`Pontuação atual: ${pontuacao}`);
    console.log(`Pontuação mínima: ${pontuacaoMinima}`);
    console.log(`Pontuação necessária: ${pontosNecessarios}`);
    console.log(`Que pena ${nome}, você não atingiu a pontuação mínima para entrar no ranking!`);
}
}