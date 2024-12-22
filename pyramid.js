let pyramid = (a, n) => {
    let res = "";
    for (let i = 0; i < n; i++) {
        // console.log(;
        for (let j = 0; j < n - (i * a.Length); j++) {
            res += " ";
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            res += a;
        }
        if (i !== n - 1) {
            res += "\n";
        }
    }
    return res;
}
// console.logpyramidpyramidpyramid);
console.log(pyramid('{}', 12));
