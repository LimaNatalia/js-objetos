const cliente = {
    nome:"André",
    idade:36,
    cpf:"12312312345",
    email:"andre@gmail.com",
    fones:["45543334343","121212121212"],
    dependentes: [{
        nome:"Sara Silva",
        parentesco:"Filha",
        dataNasc:"20/02/2011"
    }]
}

cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco:"filha",
    dataNasc:"04/01/2014"
})
console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014")

console.log(filhaMaisNova[0].nome)