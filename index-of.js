let indexOf = (str, toFind, int) => {
    let res = -1
    let j = 0
    int ? j = int : j = 0
    for (i = j; i < str.length; i++) {
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
    let j = 0
    int ? j = int : j = 0
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === toFind) {
            res = i
            break
        } else {
            res = -1
        }
    }
    return res
}
let inclueds = (str, toFind) => {
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

console.log(indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2));
