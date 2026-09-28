const prompt = require("prompt-sync")()

let time = [];

let continuar = true;


// console.log("---PERFIL ATLETA---");
// console.log("Nome: " + jogador.nome);
// console.log("Rota de Jogo: ", jogador.funcao);
// jogadorEstrela.pontuacao = jogador.pontuacao + 100;
// console.log("Nova pontuação após o final: ", jogador.pontuacao)


function mostrarMenu() {
    console.log("\n=================================")
    console.log("------- SISTEMA DE GAMERS -------")
    console.log("1 - Cadastrar")
    console.log("2 - Deletar")
    console.log("3 - Mostrar Equipe")
    console.log("4 - Cálculo da Média da Equipe")
    console.log("5 - Procurar Jogador")
    console.log("6 - Atualizar pontuação")
    console.log("7 - Sair")
    console.log("\n")
}

function mostraEquipe() {
    console.log("------------------------------------")

    if (time.length === 0){
        console.log("Nenhum jogador foi cadastrado ainda.");
        return;
    }

    for (let i = 0; i < time.length; i++) {
        let jogador = time[i];
        console.log((i + 1) + ". " + jogador.nome + " | Função: ", jogador.funcao, " | Pontuação: ", jogador.pontuacao)
    }
}

function cadastrarJogador() {
    let nomeJogador = prompt("Digite o nome do usário: ")
    let funcaoJogador = prompt("Digite a função no time: ")
    let pontuacaoJogador = Number(prompt("Digite sua pontuação: "))

    if (isNaN(pontuacaoJogador)) {
        console.log("Pontuação inválida!");
        return;
    } else {
        let recruta = {
           nome: nomeJogador,
           funcao: funcaoJogador,
           pontuacao: pontuacaoJogador,
        }
        time.push(recruta)
        console.log("Usuário ", nomeJogador, " foi cadastrado com sucesso!")
        console.log("---------------------------------");
    }

}

function deletarJogador() {
    if (time.length === 0){
        console.log("Nenhum jogador cadastrado.");
        return;
    }

    let nomeDeletado = prompt("Digite o nome a ser deletado: ")
    let indexDeletado = -1;
    for (let i = 0; i < time.length; i++) {
        
        if (time[i].nome === nomeDeletado) {
            indexDeletado = i;
            break;
        }
    }


    if (indexDeletado === -1){
        console.log("Jogador não está cadastrado, informe um jogador existente.")
        return;
    }

    time.splice(indexDeletado, 1);
    console.log("Jogador deletado com sucesso!!")
}

function calculoMedia() {
    if (time.length === 0){
        console.log("Nenhum jogador cadastrado.");
        return;
    }

    totalPontos = 0; 

    for(let i = 0; i < time.length; i++){
        totalPontos = totalPontos + time[i].pontuacao;
    }

    let mediaPontos = totalPontos / time.length;

    console.log("O time possui uma pontuação média de: ",mediaPontos, " Pontos")
}

function buscarJogador() {

    let nomeDesejado = prompt("Digite o nome do jogador que deseja encontrar: ");
    console.log("Buscando por: " + nomeDesejado + "..."); 
    let encontrou = false;

    for (let i = 0; i < time.length; i++) {
        let jogadorAtual = time[i];

        if(jogadorAtual.nome === nomeDesejado ) {
            console.log("JOGADOR ENCONTRADO!!")
            console.log("Nome: " + jogadorAtual.nome + "| Pontos: " + jogadorAtual.pontuacao)
            encontrou = true;
            break
        }

        if (encontrou === false) {
            console.log("O jogador " + nomeDesejado + " não faz parte da nossa equipe.")
        }
    }
}

function atualizarPontuacao () {

    let jogadorAlterar = prompt("Qual nome do jogador que você deseja atualizar? ");

    for (let i = 0; i < time.length; i++){

        if (jogadorAlterar === time[i].nome) {
            let pontosGanhos = Number(prompt("Quantos pontos ele ganhou? "))

            time[i].pontuacao = pontosGanhos + time[i].pontuacao;

            console.log("SUCESSO! A pontuação de ", jogadorAlterar, "subiu para ", time[i].pontuacao, "pontos");

        } else {
            console.log("Jogador não encontrado, por favor, informe um jogador existente.")
        }
    }
}

while (continuar === true){

    mostrarMenu();

    let opcao = prompt("Digite sua opção: ");

    switch (opcao) {

    case "1": 
        cadastrarJogador();
        break
    case "2": 
        deletarJogador();
        break    
    case "3":
        mostraEquipe();
        break
    case "4":
        calculoMedia();
        break;    
    case "5":
        buscarJogador();
        break
    case "6":
        atualizarPontuacao();
        break
    case "7":
        continuar = false;
        break
    default: 
        console.log("Opção inválida, digite outra opção...");
    }
    
}