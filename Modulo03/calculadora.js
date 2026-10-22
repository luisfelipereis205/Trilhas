const visor = document.querySelector(".visor");
const botoes = document.querySelectorAll(".teclas button");

let numeroAtual = "0"; /* Variável que guarda o número que está sendo digitado no momento. O zero está entre aspas porque facilita juntas os algarismo sendo ele uma string */

let primeiroNumero = null; /* Guarda o primeiro número da operação. ex: em 12 + 8, ele guarda o 12. e o null significa que ainda não temos um número guardado*/

let operador = null;

let aguardandoSegundoNumero = false; /*
Essa variável indica se a calculadora está esperando o próximo número.
false: não está esperando começar um novo número.
true: está esperando que usuário comece a digitar o segundo número.
*/

let expressao = ""; /* usamos para mostrar a operação no visor*/

function atualizarVisor() {
    visor.textContent = expressao || numeroAtual;
}

function calcular() {
    const segundoNumero = Number(numeroAtual);
    let resultado;

    if (operador === "+") {
        resultado = primeiroNumero + segundoNumero;
    } else if (operador === "-") {
        resultado = primeiroNumero - segundoNumero;
    } else if (operador === "*") {
        resultado = primeiroNumero * segundoNumero;
    } else if (operador === "/") {
        if (segundoNumero === 0) {
            numeroAtual = "Erro";
            expressao = "";
            primeiroNumero = null;
            operador = null;
            aguardandoSegundoNumero = false;
            atualizarVisor();
            return;
        }

        resultado = primeiroNumero / segundoNumero;
    }

    numeroAtual = String(Number(resultado.toPrecision(10)));

    // Limpa a expressão para mostrar somente o resultado
    expressao = "";

    atualizarVisor();

    primeiroNumero = null;
    operador = null;
    aguardandoSegundoNumero = true;
}

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        const valor = botao.textContent.trim(); /*trim() remove espaços extras no começo e no final do texto.*/

        // Botão de limpar
        if (valor === "C") {
            numeroAtual = "0";
            primeiroNumero = null;
            operador = null;
            aguardandoSegundoNumero = false;
            expressao = "";

            atualizarVisor();
            return;
        }

        if (/^[0-9]$/.test(valor)) { //Essa condição verifica se o botão clicado contém exatamente um algarismo de 0 a 9.
            if (numeroAtual === "Erro") {
                numeroAtual = "0";
                primeiroNumero = null;
                operador = null;
                expressao = "";
            }

            if (aguardandoSegundoNumero) {
                numeroAtual = valor;
                aguardandoSegundoNumero = false;
            } else if (numeroAtual === "0") {
                numeroAtual = valor;
            } else {
                numeroAtual += valor;
            }

            if (operador !== null) {
                expressao = primeiroNumero + " " + operador + " " + numeroAtual;
            } else {
                expressao = "";
            }

            atualizarVisor();
            return;
        }

        if (valor === ".") {
            if (numeroAtual === "Erro") {
                numeroAtual = "0";
                primeiroNumero = null;
                operador = null;
                expressao = "";
            }

            if (aguardandoSegundoNumero) {
                numeroAtual = "0.";
                aguardandoSegundoNumero = false;
            } else if (!numeroAtual.includes(".")) {
                numeroAtual += ".";
            }

            if (operador !== null) {
                expressao = primeiroNumero + " " + operador + " " + numeroAtual;
            } else {
                expressao = "";
            }

            atualizarVisor();
            return;
        }

        // Operadores
        if (["+", "-", "*", "/"].includes(valor)) {
            if (numeroAtual === "Erro") {
                return;
            }

            // Permite continuar o cálculo com outro operador
            if (operador !== null && !aguardandoSegundoNumero) {
                calcular();

                if (numeroAtual === "Erro") {
                    return;
                }
            }

            primeiroNumero = Number(numeroAtual);
            operador = valor;
            aguardandoSegundoNumero = true;

            expressao = numeroAtual + " " + operador;

            atualizarVisor();
            return;
        }

        // Botão de igualdade
        if (valor === "=") {
            if (
                operador !== null &&
                primeiroNumero !== null &&
                !aguardandoSegundoNumero &&
                numeroAtual !== "Erro"
            ) {
                calcular();
            }
        }
    });
});
