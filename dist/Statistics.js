import countBy from "./countBy.js";
function filterPaydTransactions(transaction) {
    return transaction.value !== null;
}
export default class Statistics {
    transactions;
    total;
    payment;
    status;
    constructor(transactions) {
        this.transactions = transactions;
        this.total = this.setTotal();
        this.payment = this.setPayment();
        this.status = this.setStatus();
    }
    setTotal() {
        const paydTransactions = this.transactions
            .filter(filterPaydTransactions)
            .reduce((acumulator, item) => {
            return acumulator + item.value;
        }, 0);
        return paydTransactions;
    }
    setPayment() {
        return countBy(this.transactions.map(({ payment }) => payment));
    }
    setStatus() {
        return countBy(this.transactions.map(({ status }) => status));
    }
}
//# sourceMappingURL=Statistics.js.map