export interface CountList {
    [key: string]: number;
}

export default function countBy(array: (string | number)[]) {
    return array.reduce((acumulator: CountList, item) => {
        if(acumulator[item]) {
            acumulator[item] += 1;
        }else{
            acumulator[item] = 1;
        }
        return acumulator;
    }, {})
}