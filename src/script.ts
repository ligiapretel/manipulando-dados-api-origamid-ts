import Statistics from "./Statistics.js";
import { CountList } from "./countBy.js";
import fetchData from "./fetchData.js";
import normalizeTransaction from "./normalizeTransaction.js";

async function handleData(){
    const data = await fetchData<APITransaction[]>('https://api.origamid.dev/json/transacoes.json?');
    
    if(!data) return;
    
    const transactions = data.map(normalizeTransaction);

    fillTable(transactions);
    fillStatistics(transactions);
}

function fillPaymentResume(list: CountList, containerId: string): void{
    const containerElement = document.getElementById(containerId);

    if(containerElement){
        const paymentKeys = Object.keys(list);
        paymentKeys.forEach((key) => {
            containerElement.innerHTML += `<p>${key}: ${list[key]}</p>`
        })
    }
}

function fillStatistics(transactions: FormattedTransaction[]): void{
    const data = new Statistics(transactions);

    fillPaymentResume(data.payment,'payment-container');
    fillPaymentResume(data.status,'status-container');

    const totalElement = document.querySelector<HTMLElement>('#total span');

    if(totalElement){
        totalElement.innerText = (data.total).toLocaleString('pt-BR', 
            {
                style: 'currency', 
                currency: 'BRL'
            });
    }

    const bestDayElement = document.querySelector<HTMLElement>('#best-day span');

    if(bestDayElement){
        bestDayElement.innerText = data.bestDay[0];
    }
}

function fillTable(transactions: FormattedTransaction[]): void{
    const table = document.querySelector("#transactions-table tbody");

    if(!table) return;

    transactions.forEach((item) => {
        table.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>R$ ${item.currency}</td>
                <td>${item.payment}</td>
                <td>${item.status}</td>
            </tr>
        `
    })
}

handleData();