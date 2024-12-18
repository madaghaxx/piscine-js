const isPositive = (num) => num > 0;
const abs = (num) => {
    return isPositive(num) || num == 0 ? num : num * -1;
}