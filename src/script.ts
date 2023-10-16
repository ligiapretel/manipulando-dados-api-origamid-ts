import fetchData from "./fetchData.js";

type StatusTransaction = "Paga" | "Recusada pela operadora de cartão" | "Aguardando pagamento" | "Estornada";
type PaymentTransaction = "Cartão de Crédito" | "Boleto";

interface APITransaction {
    Nome: string;
    ID: number;
    Data: string;
    Status: string;
    Email: string;
    ['Valor (R$)']: string;
    ['Forma de Pagamento']: string;
    ['Cliente Novo']: number;
}

async function handleData(){
    const data = await fetchData<APITransaction[]>('https://api.origamid.dev/json/transacoes.json');
    
    if(data){
        data.forEach((item) => {
            console.log(item);
        })
    }

    console.log("Código continuou");
}

handleData();