/***********************************************************************************************
 * Objetivo: Realizar a entrada de dados de um usuário e dois valores que serão somados
 * Data: 09/08/23
 * Autor: Marcel
 * Versão: 1.0
 **********************************************************************************************/

//Import da biblioteca readline
var readline = require('readline');

//Criando um objeto para criar a interação com o usuário
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Entrada de dados para o nome do usuário
entradaDados.question('Digite seu nome:', function(nomeUsuario){
    var nome = nomeUsuario;

    //Entrada de dados para o valor 1
    entradaDados.question('Digite o valor1:', function(valor1Usuario){
        var valor1 = valor1Usuario;

        //Entrada de dados para o valor 2
        entradaDados.question('Digite o valor2:', function(valor2Usuario){
            var valor2 = valor2Usuario;

            /* Conversão de dados de String para Numero
             *  parseInt() - Converte de String para numero Inteiro 
             *  parseFloat() - Converte de String para numero Real 
             *  Number() - Converte de String para numero Inteiro ou Real conforme a necessidade
             */

            var resultado = Number(valor1) + Number(valor2);
            console.log('A soma dos valores é: ' + resultado);
            
            //Força o fechamento do programa
            entradaDados.close();
        });
    });
});