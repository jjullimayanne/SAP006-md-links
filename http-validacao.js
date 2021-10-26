import fetch from "node-fetch";
 async function checaStatus(arrayUrls) {
   //promises
   const arrayStatus = await Promise.all(arrayUrls.map(async url => {
       const res = await fetch(url)
       return res.status;
   }))
   return arrayStatus
 }
 function geraArraydeUrls(arrayLinks) {

    return arrayLinks.map(objetoLink => Object.values(objetoLink) .join());
}
async function validaUrls(arrayLinks) {
    const links = geraArraydeUrls(arrayLinks);
    const statusLinks = await checaStatus(links)
 return statusLinks
}
export default validaUrls

///module.exports = validaUrls;
