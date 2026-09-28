const prompt = require("prompt-sync")();

// Strings
let nomeJogador = "Felipef";

// boolean --> pode ser true ou false
let statusAtivo = true;

// Number/inteiro
let pontuacao = 1000;

// Constantes --> não podem ser alteradas
const equipe = "Kings team";

console.log("----------PERFIL DO CAPITÃO----------");
// console.log(`Nome do jogador: ${nomeJogador}`);
console.log("Nome do jogador: " + nomeJogador);

nomeJogador = "Mourão";

console.log("Nome do jogador: " + nomeJogador);
console.log(`Time: ${equipe}`);
console.log(`Pontuação no ranking: ${pontuacao}`);

pontuacao = pontuacao + 500;
console.log(`Pontuação no ranking: ${pontuacao}`);
