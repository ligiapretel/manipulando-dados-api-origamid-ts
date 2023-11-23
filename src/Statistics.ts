import countBy from "./countBy.js";

type TransactionValueOnlyTypeNumber = FormattedTransaction & { value: number };

function filterPaydTransactions(transaction: FormattedTransaction): transaction is TransactionValueOnlyTypeNumber{
    return transaction.value !== null;
}

export default class Statistics{
    private transactions;
    total;
    payment;
    status;

    constructor(transactions: FormattedTransaction[]){
        this.transactions = transactions;
        this.total = this.setTotal();
        this.payment = this.setPayment();
        this.status = this.setStatus();
    }

    private setTotal(){
        const paydTransactions = this.transactions
            .filter(filterPaydTransactions)
            .reduce((acumulator, item) => {
                return acumulator + item.value;
            }, 0);

        return paydTransactions;
    }

    private setPayment(){
       return countBy(this.transactions.map(({ payment }) => payment));
    }

    private setStatus(){
       return countBy(this.transactions.map(({ status }) => status));
    }
}