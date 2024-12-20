let indexOf = (str, toFind, int) => {
    let res = -1
    let j = 0
    int ? j = int : j = 0
    for (let i = j; i < str.length; i++) {
        if (str[i] === toFind) {
            res = i
            break
        } else {
            res = -1
        }
    }
    return res
}

let lastIndexOf = (str, toFind, int) => {
    let res = -1
    let j = str.length - 1
    int ? j = int : j = str.length - 1
    for (j; j>=0; j--) {
        if (str[j] === toFind) {
            res = j
            break
        } else {
            res = -1
        }
    }
    return res
}
let includes = (str, toFind) => {
    let res = false
    for (let i = 0; i < str.length; i++) {
        if (str[i] === toFind) {
            res = true
            break
        } else {
            res = false
        }
    }
    return res
}
// let t
// console.log(lastIndexOf([t, 0, 0, t], t, 2));
