///////Exercicio 4
const produtosConsumidos = [
    {
        nomeItem: "Pao de alho",
        precoUnit: 1500,
        quant: 3
    },
    {
        nome: "cerveja",
        precoUnit: 1000,
        quant: 2
    },
    {
        nome: "refrigerante",
        precoUnit: 500,
        quant: 1
    }
]
const cartao = {
    nome: "pedro",
    idade: 28,
    produtosConsumidos
}
let totalPagar = 0;
for (let i = 0; i < produtosConsumidos.length; i++) {
    totalPagar += (produtosConsumidos[i].precoUnit * produtosConsumidos[i].quant);
}

console.log(`ola ${cartao.nome}, o consumo total deu R$${(totalPagar / 100).toFixed(2)}`);


// ///////Exercicio 3
// const produtosConsumidos = [
//     {
//         nomeItem: "Pao de alho",
//         precoUnit: 1500,
//         quant: 5
//     },
//     {
//         nome: "cerveja",
//         precoUnit: 1000,
//         quant: 2
//     },
//     {
//         nome: "refrigerante",
//         precoUnit: 500,
//         quant: 1
//     }
// ]
// const cartao = {
//     nome: "pedro",
//     idade: 28,
//     produtosConsumidos
// }
// //console.log(cartao);
// console.log(cartao.nome);
// console.log(cartao.idade);
// cartao.idade = 27;
// console.log(cartao.idade);
// console.log(cartao.produtosConsumidos[0].nomeItem);


// console.log(cartao.produtosConsumidos[produtosConsumidos.length - 1].precoUnit);


// ///////Exercicio 2
// const produtosConsumidos = [
//     {
//         nome: "Pao de alho",
//         precoUnit: 1500,
//         quant: 5
//     },
//     {
//         nome: "cerveja",
//         precoUnit: 1000,
//         quant: 2
//     },
//     {
//         nome: "refrigerante",
//         precoUnit: 500,
//         quant: 1
//     }
// ]
// const cartao = {
//     nome: "pedro",
//     idade: 28,
//     produtosConsumidos
// }
// console.log(cartao);


// ///////Exercicio 1
// const pessoa = {
//     nome: "jose",
//     idade: 30,
//     altura: 1.73,
//     CNH: true,
//     apelidos: ["Jr", "juninho"]
// }
// // //console.log(pessoa.nome)
// // console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${pessoa.CNH} CNH e os seguintes apelidos: ${pessoa.apelido}`);

// let textoCNH = pessoa.CNH ? "possui CNH" : "nao possui CNH";
// //let textoCNH = "";
// // if (pessoa.CNH) {
// //     textoCNH = "possui CNH";
// // } else {
// //     textoCNH = "nao possui CNH";
// // }
// console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCNH} e os seguintes apelidos:`);
// for (let apelido of pessoa.apelidos) {
//     console.log(`- ${apelido}`)
// }