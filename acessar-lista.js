const cliente = {
    nome:"André",
    idade:36,
    cpf:"12312312345",
    email:"andre@gmail.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

// console.log(cliente[chaves[0]])

console.log(cliente["nome"])

chaves.forEach(info=>console.log(cliente[info]))