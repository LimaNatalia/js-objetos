const cliente = {
    nome:"André",
    idade:36,
    cpf:"12312312345",
    email:"andre@gmail.com",
    fones:["45543334343","121212121212"],
    dependentes: [
        {
        nome:"Sara Silva",
        parentesco:"Filha",
        dataNasc:"20/02/2011"},
        {
        nome:"Samia Maria",
        parentesco:"filha",
        dataNasc:"04/01/2014"
        }
    ],
    saldo: 100,
    depositar: function(valor)
    {
        this.saldo += valor
    }
}
console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)