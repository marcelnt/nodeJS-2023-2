/*********************************************************************************************
 * Objetivo: Realizar calculos matemáticos de 4 operações
 * Data: 23/08/2023
 * Autor: Marcel
 * Versão: 1.0
 ***********************************************************************************************/

//Import da biblioteca do readline
var readline = require('readline');

//Criação do objeto de entrada de dados
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Entrada do valor 1
entradaDeDados.question('Digite o valor1:', function(valor1){
    let numero1 = valor1.replace(',','.');

    //Entrada do valor 2
    entradaDeDados.question('Digite o valor2:', function(valor2){
        let numero2 = valor2.replace(',','.');

        //Entrada da operação a ser calculada
        entradaDeDados.question('Escolha uma operação: [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR]', function(tipoCalculo){
            //toUpperCase() - converte uma String para MAIUSCULO
            //toLowerCase() - converte uma String para minusculo
            let operacao = tipoCalculo.toUpperCase();
            let resultado;

            //Validação de entrada de valores em branco
            if(numero1 == '' || numero2 == ''){
                console.log('ERRO: É obrigatório a entrada de todos os valores.');
            //Validação de entrada de caracteres inválidos    
            }else if(isNaN(numero1) || isNaN(numero2)){
                console.log('ERRO: É obrigatório a entrada somente de valores numéricos.');
            }else{
                //Converte as variaveis em numero 
                numero1 = Number(numero1);
                numero2 = Number(numero2);

                //Processamento dos calculos matemáticos
                // if(operacao == 'SOMAR')
                //     resultado = numero1 + numero2;
                // else if(operacao == 'SUBTRAIR')
                //     resultado = numero1 - numero2;
                // else if(operacao == 'MULTIPLICAR')
                //     resultado = numero1 * numero2;
                // else if (operacao == 'DIVIDIR')
                // {
                //     //Validação da divisão por 0
                //     if(numero2 == 0)
                //         console.log('ERRO: Não é possível realizar divisões por 0.');
                //     else
                //         resultado = numero1 / numero2;
                // }else
                //     console.log('ERRO: Não foi possível realizar o calculo pois nenhuma das opções foi selecionada.');

                //chama a função da calculadora para realizar a operação matemática
                resultado = calculadora(numero1, numero2, operacao);
                
                if (resultado)
                    console.log(resultado);

            }
        });
    });
});

//Função para realizar calculos matemáticos
function calculadora (valor1, valor2, tipoCalculo){
    //Recebe os dados dos argumentos em variáveis locais
    let numero1 = valor1;
    let numero2 = valor2;
    let operacao = tipoCalculo;
    let resultado;

    //Versão 2 - Swicth
    switch (operacao) {
        case "SOMAR":
        case "+":
            resultado = numero1 + numero2;
            break;
        case "SUBTRAIR":
        case "-":
            resultado = numero1 - numero2;
            break;
        case "MULTIPLICAR":
        case "*":
            resultado = numero1 * numero2;
            break;
        case "DIVIDIR":
        case "/":
            //Validação da divisão por 0
            if(numero2 == 0)
                console.log('ERRO: Não é possível realizar divisões por 0.');
            else
                resultado = numero1 / numero2;
            break;
        default:
            console.log('ERRO: Não foi possível realizar o calculo pois nenhuma das opções foi selecionada.');
            break;
    }

    if (resultado != undefined)
        return resultado;
    else
        return false;
}






