/*******************************************************************************
 * Objetivo: Criar uma calculadora quwe realizar 4 operações matemáticas
 * Data: 23/08/2023
 * Autor: Marcel
 * Versão: 1.0
 ******************************************************************************/
//Import da bilbioteca readline
var readline = require('readline');

//Criação do objeto entradaDeDados
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Entrada de dados do Valor1
entradaDeDados.question('Digite o valor1:', function(valor1){
    let numero1 = valor1.replace(',','.');

    //Entrada de dados do valor2
    entradaDeDados.question('Digite o valor2:', function(valor2){
        let numero2 = valor2.replace(',','.');

        //Entrada de dados do tipo de calculo a ser realizado
        entradaDeDados.question('Escolha uma operação [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR]:', function(tipoCalculo){
            let operacao = tipoCalculo.toUpperCase(); //converte para MAIUSCULO
            let resultado;

            //Validação de entrada de valores em branco
            if(numero1 == '' || numero2 == ''){
                console.log('ERRO: É obrigatório o preenchimento de todos os valores.')
            //Validação de caracters inválidos
            }else if (isNaN(numero1) || isNaN(numero2)){
                console.log('ERRO: É obrigatório a entrada somente de números.');
            }else{

                //conversão dos tipos de dados
                numero1 = Number(numero1);
                numero2 = Number(numero2);

                // //Processamento dos calculos
                // if (operacao == 'SOMAR')
                //     resultado = numero1 + numero2;
                // else if (operacao == 'SUBTRAIR')
                //     resultado = numero1 - numero2;
                // else if (operacao == 'MULTIPLICAR')
                //     resultado = numero1 * numero2;
                // else if (operacao == 'DIVIDIR'){
                //     //Validação da divisão por 0
                //     if(numero2 == 0)
                //         console.log('ERRO: Não é possível realizar a divisão por 0.')
                //     else
                //         resultado = numero1 / numero2;
                // }else
                //     //Validação de operações inválidas
                //     console.log('ERRO: A operação solicitada não pode ser calculada, verifique a operação escolhida');
                
                //Chama a função
                resultado = calculadora(numero1, numero2, operacao);

                //Tratamento para exibir o resultado somente se houver conteudo da variavel
                if(resultado)
                    console.log(resultado);
                

            }
        });
    });
});

//Função para realizar calculos
function calculadora (valor1, valor2, tipoCalculo){
    //Recebendo os valores dos argumentos da função
    let numero1 = valor1
    let numero2 = valor2
    let operacao = tipoCalculo;
    
    let resultado;

    //Versão 2.0 Switch
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
            if(numero2 == 0)
                console.log('ERRO: Não é possível realizar a divisão por 0.')
            else
                resultado = numero1 / numero2;
            break;
        default:
            //Validação de operações inválidas
            console.log('ERRO: A operação solicitada não pode ser calculada, verifique a operação escolhida');
            break;
    }
        if(resultado != undefined)
            return resultado.toFixed(2); //Retorno do resultado das operações
        else
            return false;
}