import currencyToNumber from "./currencyToNumber.js";
import stringToDate from "./stringToDate.js";

declare global {
    type StatusTransaction = "Paga" | "Recusada pela operadora de cartão" | "Aguardando pagamento" | "Estornada";
    type PaymentTransaction = "Cartão de Crédito" | "Boleto";

    interface APITransaction {
        Nome: string;
        ID: number;
        Data: string;
        Status: StatusTransaction;
        Email: string;
        ['Valor (R$)']: string;
        ['Forma de Pagamento']: PaymentTransaction;
        ['Cliente Novo']: number;
    }

    interface FormattedTransaction {
        name: string;
        id: number;
        payDay: Date;
        status: StatusTransaction;
        email: string;
        currency: string;
        value: number | null;
        payment: PaymentTransaction;
        newCustomer: boolean;
    }
}

export default function normalizeTransaction(transaction: APITransaction): FormattedTransaction{
    return{
        name: transaction.Nome,
        id: transaction.ID,
        payDay: stringToDate(transaction.Data),
        status: transaction.Status,
        email: transaction.Email,
        currency: transaction["Valor (R$)"],
        value: currencyToNumber(transaction["Valor (R$)"]),
        payment: transaction["Forma de Pagamento"],
        newCustomer: Boolean(transaction["Cliente Novo"]),
    }
}