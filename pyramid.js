let pyramid = (a, n) => {
    let res = "";
    for (let i = 1; i <= n; i++) {
        for (let j = i; j < n; j++) {
            for (let p = 1; p <= a.length; p++) {
                res += " "
            }
        }
        for (let j = 1; j <= i; j++) {
            res += a
                ;
        }
        for (let j = 1; j < i; j++) {
            res += a
        }

        if (i !== n) {
            res += "\n";
        }
    }
    return res;
}
// console.log(pyramid);
// console.log(pyramid('*', 12));
