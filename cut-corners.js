let trunc = (num) => {
    let i = 0
    let hehe = 0
    let mm = 1000000
    let sign = 1
    if (num < 0) {
        sign = -1
        num *= -1
    }
    while (num > 1) {
        if (num >= mm) {
            hehe += mm
            num -= mm

        } else {
            mm /= 10
        }
        // num--
        // i++
    }
    return hehe * sign
}


let ceil = (num) => {
    let res = trunc(num)
    res > 0 ? res += 1 : res
    return res
}


let floor = (num) => {
    let res = trunc(num)
    res >= 0 ? res : res -= 1

    return res
}



let round = (num) => {
    let x = num - trunc(num)
    if (num >= 0 && x >= 0.5) {
        return ceil(num)
    } else if (num < 0 && x <= -0.5) {
        return floor(num)
    }

return trunc(num)
}

// const nums = [3.7, -3.7, 3.1, -3.1]
// console.log(nums.map(round))
// console.log(nums.map(floor))
// console.log(nums.map(trunc))
// console.log(nums.map(ceil))