/******************************************************************************************
 * Objetivo: Calcular a média de um aluno
 * Data: 09/08/23
 * Autor: Marcel
 * Versão: 1.0
******************************************************************************************/

//Import da biblioteca readline
var readline = require('readline');

//Cria um objeto para realizar as entradas de dados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 *  var - Permite criar uma variável no escopo Global do projeto
 *  let - Permite criar uma variável no escopo Local do projeto (esta variável irá 
 *      existir somente dentro do seu bloco de programação)
 *  const - Permite criar um espaço em memória para guardar um conteúdo que não sofrerá
 *      alteração e pode ser no escopo Global ou Local
 * 
 * 
 * Operadores de Comparação
 * 
 *  == Permite verificar a igualdade
 *  <  Permite verificar o menor valor
 *  >  Permite verificar o maior valor
 *  <= Permite verificar o menor valor ou a igualdade
 *  >= Permite verificar o maior valor ou a igualdade
 *  != Permite verificar a diferença entre dois conteúdos
 *  === Permite verificar a igualdade entre conteúdos e a igualdade nos tipos de dados
 *  !== Permite verificar a diferença de conteudos e a igualdade de tipo de dados
 * 
 * 
 * Operadores lógicos
 *      E           AND         &&
 *      OU          OR          ||
 *      NEGAÇÃO     NOT         !
 */



entradaDados.question('Digite o nome do aluno:', function(nomeAluno) {
    let nome = nomeAluno;

    entradaDados.question('Digite o nome do curso:', function(cursoAluno) {
        let curso = cursoAluno;

        entradaDados.question('Digite o nome da disciplina:', function(disciplinaAluno) {
            let disciplina = disciplinaAluno;

            entradaDados.question('Digite a nota 1:', function(nota1Aluno) {
                let nota1 = nota1Aluno.replace(',','.'); //replace() - localiza um caracter e substitui por outro
                
                entradaDados.question('Digite a nota 2:', function(nota2Aluno) {
                    let nota2 = nota2Aluno.replace(',','.');

                    entradaDados.question('Digite a nota 3:', function(nota3Aluno) {
                        let nota3 = nota3Aluno.replace(',','.');
                        
                        entradaDados.question('Digite a nota 4:', function(nota4Aluno) {
                            let nota4 = nota4Aluno.replace(',','.');
                            
                            //Validação de entrada de dados vazia
                            if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '')
                            {
                                console.log('ERRO: É obrigatório o preenchimento de todas as notas!');
                                entradaDados.close();
                            //Validação para verificar se as entradas de dados são numéricas
                            // isNaN() - permite verificar se o conteúdo da variável é numérica   
                            }else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4))
                            {
                                console.log('ERRO: É obrigatório a entrada de dados apenas de valores numéricos');
                                entradaDados.close();

                            //Validação para limitar a entrada de valores entre 0 e 10    
                            }else if(nota1>10 || nota1<0 || nota2>10 || nota2<0 || nota3>10 || nota3<0 || nota4>10 || nota4<0)
                            {
                                console.log('ERRO: É obrigatório apenas a entrada de valores entre 0 e 10.');
                                entradaDados.close();
                            }else{

                                //parseInt() - Converte para inteiro
                                //parseFloat - Converte para real
                                //Number() - Converte para número podendo ser inteiro ou real
                                //String() - Converte para string uma variável do tipo numérica
                                //tofixed() - permite limitar a qtde de casas decimais

                                let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4;
                                let statusAluno;

                                if(media <= 4.9){
                                    statusAluno = 'REPROVADO';
                                }else if (media >=5 && media <= 6.9){
                                    statusAluno = 'EXAME';
                                }else if (media >= 7 && media <=10){
                                    statusAluno = 'APROVADO';
                                }
                                console.log('A média do aluno é: ' + String(media.toFixed(1)).replace('.',','));
                                console.log('O aluno(a) ' + nome + ' está ' + statusAluno);
                            }
                        });
                    });
                    
                });
            });
        });

    });
});