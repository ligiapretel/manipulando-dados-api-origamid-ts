function filterPaydTransactions(transaction) {
    return transaction.value !== null;
}
export default class Statistics {
    transactions;
    total;
    constructor(transactions) {
        this.transactions = transactions;
        this.total = this.setTotal();
    }
    setTotal() {
        const paydTransactions = this.transactions
            .filter(filterPaydTransactions)
            .reduce((acumulator, item) => {
            return acumulator + item.value;
        }, 0);
        return paydTransactions;
    }
}
//# sourceMappingURL=Statistics.js.map