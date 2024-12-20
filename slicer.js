let slice = (str, start, end) => {
    let res = ""
    end ? end : end = str.length
    if (start < 0) {
        start = str.length + start
    }
    if (end < 0) {
        end = str.length + end
    }
    for (let i = start; i < end; i++) {
        res += str[i]
    }
    return res
}

console.log(slice([1, 2, 3, 4, 5, 6], 2));
