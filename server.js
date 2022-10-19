const http = require('http');



//função que é executada a cada request
const eachRequest = (request, response) => {
    //Definindo o tipo de resposta para o json
    response.setHeader('Content-Type', 'application/json')

    //pegando a URL e o metodo acessado na request pelo cliente http
    let {url, method} = request;

    //definindo conteudo da resposta
    let content = JSON.stringify(method + "Testando "+url)
    
    //respondendo pro httpClient
    response.end(content);
};

//Criando servidor web
module.exports = http.createServer(eachRequest);