let triangle = (str, num) => {
    let result = '';
    for (let i = 0; i <= num; i++) {
        for (let j = 0; j < i; j++) {
            result += str;
        }
        if ((i < num) && (i > 0)) {
            result += '\n';
        }
    }
    return result;
}
// console.log(triangle('*', 5));