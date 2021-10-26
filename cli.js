import chalk from 'chalk'
import pegaArquivo from './bin/index.js'
//const pegaArquivo =  require('./bin/index'
import validaUrls from './http-validacao.js'
//const validaUrls = require('./http-validacao')

const caminho = process.argv;
async function processTexto(caminhoDeArquivo) {
    const resultado =  await  pegaArquivo(caminhoDeArquivo[2])
    if(caminho[3] === 'validar') {
        console.log(chalk.yellow("links validados"), await  validaUrls(resultado));

    }else{
 console.log(chalk.yellow('lista de links'), resultado)
    }

}


processTexto(caminho);
