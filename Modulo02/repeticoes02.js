const prompt = require("prompt-sync")()

console.log("1.Novo Cadastro\n2.Lista de Jogadores\n3.Média da Equipe\n4.Sair");
let opcaoEscolhida = prompt("Digite a opção que quer acessar:")

switch (opcaoEscolhida){

    case "1":
        console.log("Abrindo o painel de NOVO CADASTRO...");
        break
    case "2":
        console.log("Carregando a LISTA DE JOGADORES..."); 
        break; 
    case "3": 
        console.log("Calculando a MÉDIA DA EQUIPE..."); 
        break;
    case "4":
        break;
    default: 
        // O default pega tudo que não for 1, 2, 3 ou 4
        console.log("Opção inválida. Por favor, escolha um número do menu."); 
        break; 
}