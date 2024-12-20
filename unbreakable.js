let join = (arr, sep) => {
    let res = ""
    for (let i = 0; i < arr.length; i++) {
        res += arr[i]
        res += sep
    }
    return res
}

console.log(join([1, 2, 3, 4, 5, 6], " "));
