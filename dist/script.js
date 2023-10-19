import Statistics from "./Statistics.js";
import fetchData from "./fetchData.js";
import normalizeTransaction from "./normalizeTransaction.js";
async function handleData() {
    const data = await fetchData('https://api.origamid.dev/json/transacoes.json?');
    if (!data)
        return;
    const transactions = data.map(normalizeTransaction);
    fillTable(transactions);
    fillStatistics(transactions);
}
function fillStatistics(transactions) {
    const data = new Statistics(transactions);
    const totalElement = document.querySelector('#total span');
    if (totalElement) {
        totalElement.innerText = (data.total).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }
}
function fillTable(transactions) {
    const table = document.querySelector("#transactions-table tbody");
    if (!table)
        return;
    transactions.forEach((item) => {
        table.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>R$ ${item.currency}</td>
                <td>${item.payment}</td>
                <td>${item.status}</td>
            </tr>
        `;
    });
}
handleData();
//# sourceMappingURL=script.js.map