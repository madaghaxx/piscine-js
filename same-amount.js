let sameAmount = (str, reg1, reg2) => {
    let res = false
    let match1 = reg1.test(str);
    let match2 = reg2.test(str);
    if (match1 && match2) {
        res = true
    }
    return res;
}
// const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw
// ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`

// console.log(sameAmount(data, /q /, /qqqqqqq/))