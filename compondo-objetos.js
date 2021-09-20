const cliente = {
    nome:"André",
    idade:36,
    cpf:"12312312345",
    email:"andre@gmail.com",
    fones:["45543334343","121212121212"]
}

cliente.dependentes = {
    nome:"Sara",
    parentesco:"Filha",
    dataNasc:"20/02/2011"
}
console.log(cliente);

cliente.dependentes.nome = "Sara Silva"
console.log(cliente)