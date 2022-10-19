const http = require('http');

const host = 'localhost';
const port = '8000';

//função que é executada a cada request
const eachRequest = (request, response) => {
    //Definindo o tipo de resposta para o json
    response.setHeader('Content-Type', 'application/json')

    //definindo conteudo da resposta
    let content = JSON.stringify("Testando")
    
    //respondendo pro httpClient
    response.end(content);
};

const server = http.createServer(eachRequest);