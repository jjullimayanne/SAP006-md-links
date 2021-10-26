import chalk from'chalk'
import fs from 'fs'
//const fs = require('fs')

console.log(chalk.blue("index"))

///fs.readFile(file, [encoding], [callback]);

function pegaArquivo (caminhoArquivo) {
    const encoding = 'utf-8'
    fs.readFile(caminhoArquivo, encoding, (_, texto) => {
        console.log(chalk.green(texto))
    })

}

pegaArquivo()
