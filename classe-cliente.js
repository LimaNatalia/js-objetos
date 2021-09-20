class Cliente{
    construtor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
}
const andre = new Cliente("André","andre@gmail.com","123123123123",100)

console.log(andre)