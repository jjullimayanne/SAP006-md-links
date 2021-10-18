const fetch = require('node-fetch');

function checaStatus(arrayUrls) {
    
}


function geraArraydeUrls(arrayLinks) {

    return arrayLinks.map(objetoLink => Object.values(objetoLink) .join());
    
}
function validaUrls(arrayLinks) {
    return geraArraydeUrls(arrayLinks);

}

module.exports = validaUrls;