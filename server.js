const http = require('http');
const router = require('./router')



//função que é executada a cada request
const eachRequest = (request, response) => {
    //Definindo o tipo de resposta para o json
    response.setHeader('Content-Type', 'application/json')

    //pegando a URL e o metodo acessado na request pelo cliente http
    //let url = request.url
    //let method = request.method
    let {url, method} = request;


    let content = ""
    //tenta executar esse codigo
    try {
        //definindo conteudo da resposta
        content = JSON.stringify(
        router(url, method)
    )
    } catch (error) { //se der erro algum erro, executa esse daqui
        response.writeHead(error)
    }


    
    //respondendo pro httpClient
    response.end(content);
};

//Criando servidor web
module.exports = http.createServer(eachRequest);