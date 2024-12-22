let sameAmount = (str, reg1, reg2) => {
    let res = false
    reg1 = new RegExp(reg1, 'g')
    reg2 = new RegExp(reg2, 'g')
    let match = [...str.matchAll(reg1)]
    let match2 = [...str.matchAll(reg2)]
    if (match.length === match2.length) {
        res = true
    }
    return res
}
// const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw
// ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`

// console.log(sameAmount(data, /q /, /qqqqqqq/))