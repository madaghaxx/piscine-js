let cutFirst = (str) => {
    let res = ""
    for (let i = 2; i < str.length; i++) {
        res += str[i]
    }
    return res
}
// console.log(cutFirst("abcdef"))
let cutLast = (str) => {
    let res = ""
    for (let i = 0; i < str.length - 2; i++) {
        res += str[i]
    }
    return res
}
let cutFirstLast = (str) => {
    let res = ""
    for (let i = 2; i < str.length - 2; i++) {
        res += str[i]
    }
    return res
}
let keepFirst = (str) => {

    let res = ""
    if (str.length < 2) {
        return str
    } else {
        for (let i = 0; i < 2; i++) {
            res += str[i]
        }
    }
    return res
}
let keepLast = (str) => {
    let res = ""
    if (str.length < 2) {
        res = str
    } else {
        for (let i = str.length - 2; i < str.length; i++) {
            res += str[i]
        }
    }
    return res
}
let keepFirstLast = (str) => {
    let res = ""
    if (str.length < 4) {
        res = str
    } else {
        for (let i = 0; i < 2; i++) {
            res += str[i]
        }
        for (let i = str.length - 2; i < str.length; i++) {
            res += str[i]
        }
    }
    return res
}
console.log(keepFirstLast('af'));
