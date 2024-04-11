//comentário em linha
/*
    Comentário em Bloco

*/
console.log('Aula 01 - Node.JS');

//Import da biblioteca readline, que permite realizar interação 
//de entrada de dados com o usuário
var readline = require('readline');

//Criando um objeto chamado de entradaDados com a instancia de readline
var entradaDados = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

//Exibe uma mensagem no terminal solicitando a entrada de dados pelo usuário
//Obs: o metodo question envia o texto para o terminal e aguarda a digitação
    //o retorno do que o usuário digitou chega internamente pela variavel (nomeUsuario)

//entrada de dados "nome"
entradaDados.question('Digite seu nome:', function(nomeUsuario){

    var nome = nomeUsuario;

    //entrada de dados "sobrenome"
    entradaDados.question('Digite o seu Sobre Nome:', function(sobreNomeUsuario){
        var sobreNome = sobreNomeUsuario;
        
        //Exibe as variaveis nome e sobrenome juntas (concatenadas)
        console.log('O nome do usuário é: ' + nome + ' ' + sobreNome);
    });

    //typeof() - permite identificar o tipo de dados de uma variavel ou objeto
    //console.log(typeof(nome));

    //Concatenação é representado pelo sinal de +
    // console.log('O nome do usuário é: ' + nome);
    // console.log(`O nome do usuário é: ${nome}`);
});







