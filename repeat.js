let repeat = (str, num) => {
    let res = ""
    for (let i = 0; i < num; i++) {
        res += str
    }
    return res
}
// console.log(repeat("abc", 3)) // abcabcabc