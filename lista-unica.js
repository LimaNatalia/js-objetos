const clientes = [{
    nome:"André",
    cpf:"12312312345",
    dependentes: [
        {
        nome:"Sara Silva",
        parentesco:"Filha",
        dataNasc:"20/02/2011"
        },
        {
        nome:"Samia Maria",
        parentesco:"filha",
        dataNasc:"04/01/2014"
        }],
    },
        {
            nome: "Juliana",
            cpf: "123123123",
            dependentes: [{
                nome:"Sofia",
                parentesco:"filha",
                dataNasc: "30/08/2020"
            }]
        }
    ]
    const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

    console.table(listaDependentes)