// // Questao Brazilian Storm
// const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];
// let maior = notas[0];
// let menor = notas[0];
// let total = 0;

// for (let i of notas) {
//     total += i;
//     if (i > maior) {
//         maior = i;
//     }
//     if (i < menor) {
//         menor = i;
//     }
// }
// console.log((total - maior - menor) / (notas.length - 2));

// Questao Tiro ao Alvo
// const disparos = [0, 10, 50, 70, 80, 30];
// //const disparos = [0, 50, 90, 80, 100, 80, 40]
// let maisQue70 = 0;
//
// for (let i of disparos) {
//     if (i > 70) {
//         maisQue70 += 1;
//     }
// }
// if (maisQue70 >= 3) {
//     console.log(maisQue70);
// } else {
//     console.log("ELIMINADO")
// }
// Questao Pontos no campeonato
//
// const resultados = ["V", "E", "V", "E"]
// let vitoria = 0;
// let empate = 0;
// for (let i of resultados) {
//     if (i == "V") {
//         vitoria += 3;
//     } else if (i == "E") {
//         empate += 1;
//     }
// }
// console.log(vitoria + empate);
//
//
// Questao forca
// const palpite = "a";
// const palavra = "abelha";
// let acerto = 0;
// for (let i of palavra) {
//     if (i == palpite) {
//         acerto += 1;
//     }
// }
// console.log(acerto);
//
// Questao Perda minima
//precos = [5, 10, 3];
// precos = [30, 10, 54, 76, 1, 4, 35,];
//
// let menorPrejuizo = 99999999;
// for (let i = 0; i < precos.length; i++) {
//     for (let j = i + 1; j < precos.length; j++) {
//         const compra = precos[i];
//         const venda = precos[j];
//         const prejuizo = compra - venda;
//         if (prejuizo > 0) {
//             if (prejuizo < menorPrejuizo) {
//                 menorPrejuizo = prejuizo
//             }
//         }
//     }
// }
// console.log(menorPrejuizo);
//
//
// Questao Brasil com "P"
// const palavras = ["aveia", "manha", "ave"];
// const primeiraLetra = "a";
// const segundaLetra = "v";
//
// const palavraFiltro = [];
// for (let i of palavras) {
//     if (i[0] == primeiraLetra && i[1] == segundaLetra) {
//         palavraFiltro.push(i);
//     }
// }
// if (palavraFiltro == 0) {
//     console.log("NENHUMA");
// } else {
//     for (const index of palavraFiltro) {
//         console.log(index);
//     }
// }
//
//
// Questao Carrossel
// const sequencia = "<";
// let positivo = 0;
// let negativo = 0;
// for (let i of sequencia) {
//     if (i == ">") {
//         positivo++;
//     } else {
//         negativo++;
//     }
// }
// posicao = positivo - negativo;
// if (posicao < 0) {
//     console.log(posicao + 7);
// } else {
//     console.log(posicao % 7);
// }
//
//
// // Questao Cinco ou mais, um é grátis
// const precos = [100, 500, 100, 200, 50];
// //const precos = [100, 100, 100, 50]
// let totalPago = 0;
// let maisBarato = precos[0];
//
// for (let index = 0; index < precos.length; index++) {
//     totalPago += precos[index]
// }
// if (precos.length >= 5) {
//     for (let i of precos) {
//         if (maisBarato >= i) {
//             maisBarato = i;
//         }
//     }
//     totalPago -= maisBarato;
//     console.log(totalPago);
// } else {
//     console.log(totalPago);
// }
//
// // Questao Abecedário
// const letra = "m";
// const palavras = ["mamao", "maca", "melao", "melancia", "laranja"];
// let perderam = 0;
//
// for (let i of palavras) {
//     if (i[0] != letra) {
//         perderam++;
//     }
// }
// console.log(perderam);
//
//
// // Questao Purificação
// const stringCorrompida = "*Canis %lupus )familiaris";
// let dadoPurificado = "";
// for (let i of stringCorrompida) {
//     if (!(i == "!" || i == "@" || i == "#" || i == "$" || i == "%" || i == "&" || i == "*" || i == "(" || i == ")")) {
//         dadoPurificado += i;
//     }
// }
// console.log(dadoPurificado);