const http = require('http');



//função que é executada a cada request
const eachRequest = (request, response) => {
    //Definindo o tipo de resposta para o json
    response.setHeader('Content-Type', 'application/json')

    //definindo conteudo da resposta
    let content = JSON.stringify("Testando")
    
    //respondendo pro httpClient
    response.end(content);
};

//Criando servidor web
module.exports = http.createServer(eachRequest);