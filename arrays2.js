const usuários = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];
const filtraEValida = (listaUsuarios) => {
    const processado = listaUsuarios.filter((usuario) => {
        return usuario.idade > 17 && usuario.idade < 66;
    }).every((usuario) => {
        return usuario.habilitado == true
    });
    if (processado) {
        console.log('Todos passaram no teste');
    } else {
        console.log('Todos precisam estar habilitados');
    }
}

filtraEValida(usuários);



// const usuarios = [
//     { nome: 'corola', marca: 'toyota', ano: '2020', cor: 'prata' },
//     { nome: 'argo', marca: 'fiat', ano: '2021', cor: 'preta' },
//     { nome: 'ranger', marca: 'ford', ano: '2021', cor: 'prata' },
//     { nome: 'hilux', marca: 'toyota', ano: '2018', cor: 'branco' },
// ];

// const resultado = usuarios.findIndex((item) => {
//     return item.marca === 'ford'
// })
// console.log(resultado);

// const arquivos = [
//     'teste.txt',
//     'foto.png',
//     'contrato.doc',
//     'instalador.exe'
// ]
// const antVirus = (arrayArquivos) => {
//     const resultado = arrayArquivos.some((item) => {
//         return item.slice(-4) === '.bat'
//     });

//     //const nome = "pedro";
//     if (resultado) {
//         console.log('Virus detectado');
//     } else {
//         console.log('Nenhum virus detectado');
//     }
// }
// antVirus(arquivos)

// const num = [1, 5, 3, 7];

// const resultado = num.some((numero) => {
//     return numero % 2 === 0;
// });

// console.log(resultado)


// const usuarios = [
//     { nome: 'joao', idade: 23 },
//     { nome: 'maria', idade: 18 },
//     { nome: 'ana', idade: 30 },
//     { nome: 'rodrigo', idade: 19 }
// ];

// const maiorDeIdade = usuarios.every((objeto) => {
//     return objeto.idade >= 18;
// });

// if (maiorDeIdade) {
//     console.log('Festa liberada!');
// } else {
//     console.log('Possui menor de idade');
// }



// const frutas = ['abacaxi', 'manga', 'melancia'];
// const num = [1, 2, 3, 4];

// const resultado = num.every((resultado) => {
//     return resultado < 5;
// })

// // const resultado = frutas.every((elementoAtual) => {
// //     return elementoAtual !== 'manga';
// // });

// console.log(resultado);