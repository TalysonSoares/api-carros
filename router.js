const routes = {
    '/customers': {
        'GET': 'Cadastro do clientes',
        'POST': 'listagem do clientes',
        'PATCH': 'Editar clientes',
        'DELETE': 'Excluir clientes',
    },
    '/vehicles': {
        'GET': 'Cadastro do Veiculo',
        'POST': 'listagem do Veiculos',
        'PATCH': 'Editar Veiculos',
        'DELETE': 'Excluir clientes',
    },
}



function router(url, method) {
    //a url representa qual controller a gente precisa
    //o method representa qual fuunction do controller vai ser executada

    if (!routes[url]) {
        return "404";
    }

    if (!routes[url][method]) {
        return "Metodo não permitido"
    }

}

module.exports = router;
