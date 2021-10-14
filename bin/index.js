const chalk = require('chalk')
const fs = require('fs')

console.log(chalk.blue("bin"))

///fs.readFile(file, [encoding], [callback]);
function trataErro(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho'));
}

async function pegaArquivo(caminhoArquivo) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoArquivo, encoding)
        console.log(chalk.green(texto))

    } catch(erro) {
        trataErro(erro);
    }

}

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

pegaArquivo("./SAP006-md-links/arquivos/teste.md")