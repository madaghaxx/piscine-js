let indexOf = (str, toFind) => {
    let res = -1
    for (let i = 0; i < str.length; i++) {
        if (str[i] === toFind) {
            res = i
            break
        } else {
            res = -1
        }
    }
    return res
}

let lastIndexOf = (str, toFind) => {
    let res = -1
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