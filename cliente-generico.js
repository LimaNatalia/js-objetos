function Cliente(nome,cpf,email,saldo)
{
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const Andre = new Cliente("André","123123123","amdre@gmail.com",100)

console.log(Andre)