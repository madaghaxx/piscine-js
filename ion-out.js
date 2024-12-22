let ionOut = (str) => {
    let res = []
    const reg = /(\w*)(t)ion(\w*)/g
    let hh = [...str.matchAll(reg)]
    for (let i = 0; i < hh.length; i++) {
        res.push(hh[i][1]+hh[i][2] + hh[i][3])
    }
    return res
}