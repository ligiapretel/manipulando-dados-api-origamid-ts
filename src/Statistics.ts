type TransactionValueOnlyTypeNumber = FormattedTransaction & { value: number };

function filterPaydTransactions(transaction: FormattedTransaction): transaction is TransactionValueOnlyTypeNumber{
    return transaction.value !== null;
}

export default class Statistics{
    private transactions;
    total;

    constructor(transactions: FormattedTransaction[]){
        this.transactions = transactions;
        this.total = this.setTotal();
    }

    private setTotal(){
        const paydTransactions = this.transactions
            .filter(filterPaydTransactions)
            .reduce((acumulator, item) => {
                return acumulator + item.value;
            }, 0);

        return paydTransactions;
    }
}