import chalk from 'chalk'
import fs from 'fs'
//const fs = require('fs')

//const texto = '[Node.js](https://nodejs.org/pt-br/) é um ambiente de [Node.js](https://nodejs.org/pt-br/) é um ambiente de execução para JavaScript construído com o [motor de JavaScript V8 do '
function extraiLinkds(texto) {
    const regex =  /\[([^\]]*)\]\((https?:\/\/[^*$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;

    while( ( temp = regex.exec(texto)) !== null  ){
        arrayResultados.push({ [temp[1]] : temp[2]})

    }
    //exec met de regex
     return arrayResultados.length === 0 ? 'Não há links' : arrayResultados
}

///fs.readFile(file, [encoding], [callback]);
function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho'));
}
async function pegaArquivo(caminhoArquivo) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoArquivo, encoding)
        return (extraiLinkds(texto))

    } catch(erro) {
        trataErro(erro);
    }

}
//pegaArquivo("./SAP006-md-links/arquivos/teste.md")

///module.exports = pegaArquivo;
export default pegaArquivo

/*
function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho'));
}

function pegaArquivo(caminhoArquivo) {
    const encoding = 'utf-8'
    fs.promises.readFile(caminhoArquivo, encoding)
    .then((texto) => console.log(texto))
    .catch((erro) => trataErro(erro))

}

*/

/*
function pegaArquivo (caminhoArquivo) {
    const encoding = 'utf-8'
    fs.readFile(caminhoArquivo, encoding, (erro, texto) => {
        if (erro) {
            trataErro(erro);
        }
        console.log(chalk.green(texto))
    })

}

*/
