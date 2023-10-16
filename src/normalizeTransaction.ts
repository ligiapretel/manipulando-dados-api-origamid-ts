import currencyToNumber from "./currencyToNumber.js";

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
        nome: string;
        id: number;
        data: string;
        status: StatusTransaction;
        email: string;
        moeda: string;
        valor: number | null;
        pagamento: PaymentTransaction;
        novo: boolean;
    }
}

export default function normalizeTransaction(transaction: APITransaction){
    return{
        nome: transaction.Nome,
        id: transaction.ID,
        data: transaction.Data,
        status: transaction.Status,
        email: transaction.Email,
        moeda: transaction["Valor (R$)"],
        valor: currencyToNumber(transaction["Valor (R$)"]),
        pagamento: transaction["Forma de Pagamento"],
        novo: Boolean(transaction["Cliente Novo"]),
    }
}