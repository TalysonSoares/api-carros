function add(){
    return "Cadastrando Cliente";
}

function list() {
    return [
        {
            id: 1,
            name: 'Chiquim',
        },
        {
            id: 2,
            name: 'Maria',
        },
    ];
}

function uptade() {
    return "Editando Cliente";
} 

function remove() {
    return "Excluindo Cliente";
}

module.exports = {
    //add: add,
    add,
    list,
    uptade,
    remove,
};