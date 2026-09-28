const prompt = require("prompt-sync")();

console.log("----------CADASTRO DE NOVO JOAGADOR----------");
let nomeJogador = prompt("Digite o nome do jogador: ");
let pontuacao = parseInt(prompt("Digite a pontuação do jogador: "));

console.log("----------PERFIL DO NOVO JOAGADOR----------");
console.log("Nome do jogador: " + nomeJogador);
console.log(`Pontuação no ranking: ${pontuacao}`);