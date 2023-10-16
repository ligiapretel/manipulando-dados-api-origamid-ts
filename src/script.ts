import fetchData from "./fetchData.js";


async function handleData(){
    const data = await fetchData('https://api.origamid.dev/json/transacoes.json');
    console.log(data);
}

handleData();