/*******************************************************************************************
 * Objetivo: Entrada de de dois numeros e realizar a some entre deles
 * Data: 09/08/2023
 * Autor: Marcel
 * Versão: 1.0
 *******************************************************************************************/

//Import da biblioteca readline
var readline = require('readline');

//Cria um objeto de entrada de dados para interagir com o usuário
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//entrada de dados para receber o nome do usuário
entradaDados.question('Digite seu nome: ', function(nomeUsuario){
    //Recebe o nome informado pelo usuário
    var nome = nomeUsuario;

    //Entrada de dados para receber o valor 1
    entradaDados.question('Digite o valor1:', function(valor1Usuario){
        //Recebe o valor1
        var valor1 = valor1Usuario;

        //Entrada de dados para receber o valor 2
        entradaDados.question('Digite o valor2:', function(valor2Usuario){
            //Recebe o valor 2
            var valor2 = valor2Usuario;
            
            /** Metodos para Conversão de String para Numero
             * parseInt() - Converte uma string para numero inteiro
             * parseFloat() - Converte uma string para numero real
             * Number() - Converte uma string para numero, ela define se o numero será
             *      inteiro ou real
             */

            var resultado = Number(valor1) + Number(valor2);

            console.log('O nome do usuário é: ' + nome);
            console.log('A soma dos valores é: ' + resultado);

            // console.log(typeof(resultado));

            //Força uma saída do terminal
            entradaDados.close();
        });
    })
});

