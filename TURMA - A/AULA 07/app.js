/*******************************************************************************************
 * Objetivo: Criar uma API para responder dados de Estados e Cidades
 * Data: 10/11/2023
 * Autor: Marcel
 * Versão: 1.0
***********************************************************************************************/
/**
 *  Instalações das dependencias para criação da API
 *      express       - npm install express --save
 *          Dependencia para auxiliar na criação de API
 * 
 *      cors          - npm install cors --save
 *          Dependencia para manipular recusros de acesso, permissões, etc da API (HEADER)
 * 
 *      body-parser   - npm install body-parser --save
 *          Dependencia para auxiliar na chegada de dados na API (BODY)
 */

//Import das bibliotecas do projeto 
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Cria um objeto app tendo como referencia a classe do express
const app = express();

//request - Receber dados
//response - Devolve dados

//Função para configurar as permissões do cors
app.use((request, response, next)=>{
    //Configura quem poderá fazer requisições na API (* - libera para todos | IP restringe o acesso)
    response.header('Access-Control-Allow-Origin', '*');
    //Configura os metodos que poderão ser utilizados na API (GET, POST, PUT e DELETE)
    response.header('Access-Control-Allow-Methods', 'GET');

    app.use(cors());

    next();
})

//EndPoints:  Listar a sigla de todos os Estados
app.get('/estados/sigla', cors(), async function(request, response, next){

    let controleListaEstados = require('./modulo/estados_cidades.js');
    let estados = controleListaEstados.getListaDeEstados();

    response.json(estados);
    response.status(200);
});

//EndPoint: Retorna os dados do estado filtrando pela sigla
app.get('/estado/sigla/:uf', cors(), async function(request, response, next){
    //Recebe uma variavel encaminhada por parametro na URL da requisição
    let siglaEstado = request.params.uf;

    //Import do arquivo de funções
    let controleDadosEstado = require('./modulo/estados_cidades.js');
    let dadosEstado = controleDadosEstado.getDadosEstado(siglaEstado);

    if(dadosEstado){
        response.json(dadosEstado);
        response.status(200);
    }else{
        response.status(404)
        response.json({erro: "Não foi possível encontrar um item"});
        
    }

})

//EndPoint: Retorna os dados da Capital filtrando pela sigla
app.get('/capital/estado', cors(), async function(request, response, next){
    //Recebe parametros via query, que são variaveis encaminhadas na URL da requisição (?uf=SP)
    let siglaEstado = request.query.uf;

    let controleDadosCapital = require('./modulo/estados_cidades.js');
    let dadosCapital = controleDadosCapital.getCapitalEstado(siglaEstado);

    if(dadosCapital){
        response.json(dadosCapital);
        response.status(200);
    }else{
        response.status(404)
        response.json({erro: "Não foi possível encontrar um item"});
    }    
})

//Executa a API e faz ela ficar aguardando requisições
app.listen(8080, function(){
    console.log('API funcionando e aguardadndo requisições');
})

