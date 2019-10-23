console.log('Hello World!');

const prompt =require("prompt");

prompt.start();

var schema = {
    properties: {
        nome: {
            pattern: /^[a-zA-Z\s\-]+$/,
            message: 'Nome deve conter apenas letras, espaços e traços.',
            required: true
        },
        sobrenome: {
            pattern: /^[a-zA-Z\s\-]+$/,
            message: 'Sobrenome deve conter apenas letras, espaços e traços.',
            required: true
        },
        endereco: {
            required: true
        },
        email: {
            pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/,
            message: 'E-mail inválido.',
            required: true
        },
        cpf: {
            pattern: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
            message: 'CPF inválido',
            required: true
        }
    }
}

prompt.get(schema,function(_,result) {
    console.log("Nome: " + result.nome);
    console.log("Sobrenome: " + result.sobrenome);
    console.log("Endereço: " + result.endereco);
    console.log("E-mail: " + result.email);
    console.log("CPF: " + result.cpf);
});