/****************************************************************************************************
 * Objetivo: Realizar o calculo de uma tabuada através de estruturas de repetição
 * Data: 01/09/2023
 * Autor: Marcel
 * Versão: 1.0
 ****************************************************************************************************/

//Função para gerar uma tabuada
const gerarTabuada = function(valorTabuada, contadorInicial, contadorFinal){

    //Entradas de dados que vieram pelos argumentos da função
    let tabuada = valorTabuada;
    let contInicial = contadorInicial;
    let contFinal = contadorFinal;

    let resultado;
    let status = false;

    //Validação para deixar os valores em ordem crescente
    if(contFinal < contInicial){
        contInicial = contadorFinal;
        contFinal = contadorInicial;
    }

    //Validação de dados vazio ou de caracteres inválidos
    if(contInicial == '' || contFinal == '' || tabuada == '')
        console.log('ERRO: É obrigatório fornecer todos os valores.');
    else if(isNaN(contInicial) || isNaN(contFinal) || isNaN(tabuada))
        console.log('ERRO: É obrigatório a entrada somente de números.')
    else{

        //Conversão de tipos de dados String para Number
        contInicial = Number(contInicial);
        contFinal = Number(contFinal);

        //Exemplo de While
        // while(contInicial <= contFinal){
        //     resultado = tabuada * contInicial;
        //     //console.log(tabuada + 'x' + contInicial + '=' + resultado);
        //     console.log(`${tabuada} x ${contInicial} = ${resultado}`);
        //     // contInicial = contInicial + 1;
        //     contInicial++;
        //     // contInicial +=1;
        //     status = true;
        // }

        //Exemplo do FOR
        for( ; contInicial <= contFinal; contInicial++){
            resultado = tabuada * contInicial;
            console.log(`${tabuada} x ${contInicial} = ${resultado}`);
            status = true;
        }
    }
    
return status;

}

console.log(gerarTabuada('3', '0', '10'));