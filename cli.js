const pegaArquivo =  require('./bin/index')

const caminho = process.argv;
console.log(pegaArquivo(caminho[2]))