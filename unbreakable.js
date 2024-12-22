let join = (arr, separator) => {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            result += arr[i];
        } else {
            result += arr[i] + separator;
        }
    }
    return result;
}
// console.log(join(['a', 'b', 'c'], ''));


let split = (str, separator) => {
    let result = [];
    let word = '';
    if (separator === '') {
        for (let i = 0; i < str.length; i++) {
            result.push(str[i]);
        }
        return result;
    }

    let sepLength = separator.length;
    for (let i = 0; i < str.length; i++) {
        // console.log(str.substr(i, sepLength));
        if ((str[i] == separator[0]) && (str.substr(i, sepLength) === separator)) {
            result.push(word);
            word = '';
            i += sepLength - 1;
        } else {
            word += str[i];
        }
    }
    result.push(word);
    return result;
}
console.log(split('Riad', ''))
