export default function currencyToNumber(currency) {
    const number = Number(currency.replaceAll(".", "").replace(",", "."));
    return isNaN(number) ? null : number;
}
//# sourceMappingURL=currencyToNumber.js.map