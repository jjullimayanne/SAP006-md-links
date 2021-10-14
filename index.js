const chalk = require('chalk')
const fs = require('fs')

console.log(chalk.blue("index"))

///fs.readFile(file, [encoding], [callback]);

function pegaArquivo (caminhoArquivo) {
    const encoding = 'utf-8'
    fs.readFile(caminhoArquivo, encoding, (_, texto) => {
        console.log(chalk.green(texto))
    })

}

pegaArquivo("./arquivos/teste.md")