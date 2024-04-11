/*********************************************************************************************
 * Objetivo: Realizar o calculo da média escola de um aluno
 * Data: 09/08/23
 * Autor: Marcel
 * Versão: 1.0
 *********************************************************************************************/

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
    var - Permite criar uma variável no escopo Global do código, que fica ativo em toda a
         parte do projeto

    let - Permite criar uma variável no escopo Local do código, que fica ativa apenas 
        dentro daquele bloco de programação
    
    const - Permite criar um espaço em memória para um conteúdo que não será alterado,
        podendo ser no escopo Local ou Global

    Operadores de comparação
        == Verifica a igualdade
        <  Verifica o menor valor
        >  Verifica o maior valor
        <= Verifica o valor menor ou igual
        >= Verifica o valor maior ou igual
        != Verifica a diferença
        === Verifica a igualdade entre dois conteudos e o seu tipo de dados
        !== Verifica a diferença entre conteúdos e a igualdade de tipo de dados
        ==! Verifica a igualdade entre dois conteúdos e a diferença entre tipo de dados

    Operadores Lógicos
        E           AND     &&
        OU          OR      ||
        Negação     NOT     !



*/

//Entrada de dados para o nome do aluno
entradaDados.question('Digite o nome do aluno:', function(nomeAluno){
    let nome = nomeAluno;

    //Entrada de dados para o nome do curso
    entradaDados.question('Digite o nome do curso:', function(nomeCurso){
        let curso = nomeCurso;

        //Entrada de dados para o nome do disciplina
        entradaDados.question('Digite o nome da disciplina:', function(nomeDisciplina){
            let disciplina = nomeDisciplina;

            //Entrada de dados para a nota1 do aluno
            entradaDados.question('Digite a nota 1:', function(nota1Aluno){
                let nota1 = nota1Aluno.replace(',','.');

                //Entrada de dados para a nota2 do aluno
                entradaDados.question('Digite a nota 2:', function(nota2Aluno){
                    let nota2 = nota2Aluno.replace(',','.');

                    //Entrada de dados para a nota3 do aluno
                    entradaDados.question('Digite a nota 3:', function(nota3Aluno){
                        let nota3 = nota3Aluno.replace(',','.');

                        //Entrada de dados para a nota4 do aluno
                        entradaDados.question('Digite a nota 4:', function(nota4Aluno){
                            let nota4 = nota4Aluno.replace(',','.'); //replace() - permite localizar um caracter e
                                                                        //substituir por outro    
                            //Validação de entrada das notas em branco
                            if(nota1 == '' ||  nota2 == '' || nota3 == '' || nota4 == '')
                            {
                                console.log('ERRO: Todas as notas devem ser preenchidas!');
                                entradaDados.close();
                            //Validação de entrada de dados não numéricos
                            //isNaN() - verifica se o conteúdo da variavel é ou não um número    
                            }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4))
                            {
                                console.log('ERRO: É obrigatório a entrada de dados somente com números!');
                                entradaDados.close();
                            //Validação de entrada de dados apenas entre 0 e 10    
                            }else if (nota1>10 || nota1<0 || nota2>10 || nota2<0 || nota3>10 || nota3<0 || nota4>10 || nota4<0)
                            {
                                console.log('ERRO: Os valores inseridos devem ser entre 0 e 10!');
                                entradaDados.close();
                            }else{
                                let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4;
                                let statusAluno;

                                if(media <= 4.9){
                                    statusAluno = 'REPROVADO';
                                }else if (media >= 5 && media <= 6.9){
                                    statusAluno = 'EXAME';
                                }else if (media >= 7 && media <= 10){
                                    statusAluno = 'APROVADO';
                                }

                                //String() - converte um tipo dados para caracter
                                //Number() - converte um tipo dados para numero real ou inteiro
                                //replace() - Localiza um caracter e substitui por outro
                                //toFixed() - Permite limitar a qtde de casas decimais em um numero'
                                console.log('A média final do aluno é:' + String(media.toFixed(1)).replace('.', ','));
                                console.log('O aluno está: ' + statusAluno);
                            }

                        });
                    });
                });

            });

        });
    });
});