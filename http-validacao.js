import fetch from "node-fetch";

function handleErros(erro) {
  throw new Error(erro.message);
}

async function checaStatus(arrayUrls) {
  try {
    const arrayStatus = await Promise
      .all(arrayUrls
        .map(async url => {
          const res = await fetch(url)
          return res.status;
        }))
        return arrayStatus
  } catch (erro) {
    handleErros();
  }
  //promises


}

function geraArraydeUrls(arrayLinks) {

  return arrayLinks
    .map(objetoLink => Object
      .values(objetoLink).join());
}
async function validaUrls(arrayLinks) {
  const links = geraArraydeUrls(arrayLinks);
  const statusLinks = await checaStatus(links)
  const resultados = arrayLinks.map((objeto, indice) => ({
    ...objeto,
    status: statusLinks[indice]
  }))
  return resultados;
}
export default validaUrls

///module.exports = validaUrls;
