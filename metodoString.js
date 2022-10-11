// exercicio 4
const nomeCompleto = "jose messias junior"

arrayNome = nomeCompleto.split(" ");

for (const item of arrayNome) {
    item[0] = item[0].toUpperCase();
}

console.log(arrayNome);

// // exercicio 3
// function imprimirData(dia, mes, ano) {

//     const diaForm = String(dia).padStart(2, "0");
//     const mesForm = String(mes).padStart(2, "0");

//     console.log(`${diaForm}/${mesForm}/${ano}`)

// }
// imprimirData(1, 1, 2021);

// // REPLACE exercicio 2
// const numero = "1,350,000";
// let alterado = numero;
//
// // while (alterado !== alterado.replace(",", ".")) {
// //     alterado = alterado.replace(",", ".");
// // }
// for (const i of numero) {
//     if (i == ",") {
//         alterado = alterado.replace(",", ".");
//     }
// }
// console.log(alterado);

// // REPLACE exercicio 1
// const numero = "97.50";
// const alteracao = numero.replace(".", ",");
// console.log(alteracao);

// // SLICE
// const cidade = "salvador-BA";
// //const cidade = "Minas Gerais-MG";
// let index = 0;
//
// for (let i = 0; i < cidade.length; i++) {
//     if (cidade[i] == "-") {
//         index = i;
//         break
//     }
// }
// const estado = cidade.slice(index + 1)
// console.log(estado);