let flat = (a, depth) => {
    let res = [];
    depth ? depth : depth = 1;
    // console.log(depth)
    for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i]) && depth > 0) {
            for (let j = 0; j < a[i].length; j++) {
                if (Array.isArray(a[i][j])) {
                    res.push(flat(a[i][j], depth - 1))
                } else {
                    res.push(a[i][j])
                }
            }
        } else {
            res.push(a[i]);
        }
    }
    return res;
}

// const arr1 = [0, 1, 2, [3, 4, [5, 6]]];

// console.log(flat([1, [2, [3]]]))