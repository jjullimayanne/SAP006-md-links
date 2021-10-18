const chalk = require('chalk');
const pegaArquivo =  require('./bin/index')
const validaUrls = require('./http-validacao')

const caminho = process.argv;
async function processTexto(caminhoDeArquivo) {
    const resultado =  await  pegaArquivo(caminhoDeArquivo[2])
    if(caminho[3] === 'validar') {
        console.log(chalk.yellow("links validados"), validaUrls(resultado));
         
    }else{
        console.log(chalk.yellow('lista de links'), resultado)
    }
   
}


processTexto(caminho);