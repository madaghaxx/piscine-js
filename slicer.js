let slice = (str, start, end) => {
    end ? end : end = str.length
    if (start < 0) {
        start = str.length + start
    }
    if (end < 0) {
        end = str.length + end
    }

    let res = ""
    let ress = []

    typeof str === "string" ? res : ress
    for (let i = start; i < end; i++) {
        typeof str === "string" ? res += str[i] : ress.push(str[i])
    }
    let ros = ""
    typeof str === "string" ? ros = res : ros = ress
    return ros
}

console.log(slice([1, 2, 3, 4, 5, 6], 2));

//////

