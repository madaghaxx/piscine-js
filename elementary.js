let multiply = (a, b) => {
    let aa = a
    let bb = b
    let res = 0
    if (a < 0) {
        a = -a
    }
    if (b < 0) {
        b = -b
    }
    for (let i = 0; i < b; i++) {
        res += a
    }
    if ((aa < 0 && bb > 0) || (aa > 0 && bb < 0)) {
        res = -res
    }
    return res
}


let divide = (a, b) => {
    let aa = a
    let bb = b
    let res = 0
    if (a < 0) {
        a = -a
    }
    if (b < 0) {
        b = -b
    }
    while (a >= b) {
        a -= b
        res++
    }
    if ((aa < 0 && bb > 0) || (aa > 0 && bb < 0)) {
        res = -res
    }
    return res
}

let modulo = (a, b) => {
    let aa = a
    let bb = b
    let res = 0
    if (a < 0) {
        a = -a
    }
    if (b < 0) {
        b = -b
    }
    while (a >= b) {
        a -= b
        res++
    }
    // if ((aa < 0 && bb > 0) || (aa > 0 && bb < 0)) {
    //     a = -a
    // }
    return a
}
console.log(modulo(123, -22)) 