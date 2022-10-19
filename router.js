const routes = {
    '/customers': {
        'GET': 'Cadastro do cliente',
        'POST': 'listagem do cliente',
    },
    '/vehicles': {
        'GET': 'Cadastro do Veiculo',
        'POST': 'listagem do veiculos',
    },
}



function router(url, method) {
    //a url representa qual controller a gente precisa
    //o method representa qual fuunction do controller vai ser executada

    if (url === '/customers') {
        return "Controller do clinte";
    }

    if (url === '/vehicles') {
        return "Controller do veiculo";
    }

}

module.exports = router;
