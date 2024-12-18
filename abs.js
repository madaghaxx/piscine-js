const isPositive = (num) => num >= 0;
const abs = (num) => {
    return isPositive(num) ? num : num * -1;
}