export default function countBy(array) {
    return array.reduce((acumulator, item) => {
        if (acumulator[item]) {
            acumulator[item] += 1;
        }
        else {
            acumulator[item] = 1;
        }
        return acumulator;
    }, {});
}
//# sourceMappingURL=countBy.js.map