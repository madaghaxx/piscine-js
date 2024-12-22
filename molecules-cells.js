let RNA = (str) => {
    let res = "";
    let obj = {
        A: "U",
        T: "A",
        C: "G",
        G: "C"
    }
    for (let i = 0; i < str.length; i++) {
        res += obj[str[i]];
    }
    return res;
}
let DNA = (str) => {
    let res = "";
    let obj = {
        A: "T",
        U: "A",
        C: "G",
        G: "C"
    }
    for (let i = 0; i < str.length; i++) {
        res += obj[str[i]];
    }
    return res;
}