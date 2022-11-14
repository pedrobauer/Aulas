//revisao 
function x(callback) {
    console.log("sou a função x()")
    callback(z)
}

function y(callback) {
    console.log("sou a função y()")
    callback()
}

function z() {
    console.log("sou a função z()")
}
x(y)


// let numero = 1;

// setInterval(() => {
//     console.log(numero);
//     numero++
// }, 1000);

// // Exercicio 4
// const microondas = (time) => {
//     console.log('Iniciou...');

//     setTimeout(() => {
//         console.log('Finalizou')
//     }, time);
// }
// microondas(2000);


// setTimeout(saudacao, 1000);

// function saudacao() {
//     console.log('Olá Pedro');
// }

// // Exercicio 3
// const professores = [
//     {
//         nome: 'Guido',
//         stack: 'Back'
//     },
//     {
//         nome: 'Vidal',
//         stack: 'Back'
//     },
//     {
//         nome: 'Dani',
//         stack: 'Front'
//     },
//     {
//         nome: 'Ruli',
//         stack: 'Front'
//     }
// ];

// const buscador = (array, callback) => {
//     const lista = [];
//     //    let index = 0;

//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i])) {
//             lista.push(array[i]);
//         }
//     }
//     return lista;
// }
// const resultado = buscador(professores, (item) => {
//     return item.stack === 'Front';
// })

// console.log(resultado);

// // Exercicio da materia
// const buscarFrutas = (arrayFrutas, callback) => {
//     for (let fruta of frutas) {
//         if (callback(fruta)) {
//             console.log("Fruta encontrada");
//             return;
//         }
//     }
//     console.log("Fruta nao encontrada")
// }

// const frutas = [`uva`, `manga`, `abacaxi`, `banana`];

// buscarFrutas(frutas, (item) => {
//     return item === 'manga';
// });

// // Exercicio 2
// const calculoIMC = (altura, peso, callback) => {
//     const imc = peso / (altura ** 2);
//     callback(imc);
// }

// calculoIMC(1.87, 47, (imc) => {
//     console.log(`IMC: ${imc.toFixed(2)}`)
//     if (imc < 18) {
//         console.log(`Faixa correspondente: Desnutrição`);
//     } else if (imc >= 18 && imc <= 25) {
//         console.log(`Faixa correspondente: Normal`);
//     } else {
//         console.log(`Faixa correspondente: Sobrepeso`);
//     }
// })



// // Exercicio 1
// const informaDadoUsuario = (callback) => {
//     const nome = "Guido";
//     const idade = 32;
//     callback(nome, idade);
// }

// const funcaoCallback = (nome, idade) => {
//     console.log(`Olá  ${nome}!`);
//     if (idade) {
//         const anoAtual = new Date().getFullYear();
//         console.log(`Voce nasceu em ${anoAtual - idade}`)
//     }
// }

// informaDadoUsuario(funcaoCallback);