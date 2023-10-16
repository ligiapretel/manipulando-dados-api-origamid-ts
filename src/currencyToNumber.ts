/**
 * 
 * @param currency Recebe string: '1.200,50'
 * @returns Retorna number: 1200,50
 */

export default function currencyToNumber(currency: string): number | null {
    const number = Number(currency.replaceAll(".","").replace(",","."));
    return isNaN(number) ? null : number;
}