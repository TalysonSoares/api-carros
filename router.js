const customer = require('./controllers/customer');
const vehicle = require('./controllers/vehicle')

const routes = {
    '/customers': {
        'GET': customer.list,
        'POST': customer.add,
        'PATCH': customer.update,
        'DELETE': customer.remove,
    },
    '/vehicles': {
        'GET': vehicle.list,
        'POST': vehicle.add,
        'PATCH': vehicle.update,
        'DELETE': vehicle.remove,
    },
}



function router(url, method) {
    //a url representa qual controller a gente precisa
    //o method representa qual fuunction do controller vai ser executada

    if (!routes[url]) {
        throw "404"; //gerando o erro customizado
    }

    if (!routes[url][method]) {
        throw "405"; //gerando o erro customizado
    }

    return 
}

module.exports = router;
