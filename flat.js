let flat = (a, depth) => {
    let res = [];
    depth ? depth : 1;
    for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i]) && depth > 0) {
            res = res.concat(flat(a[i], depth - 1));
        } else {
            res.push(a[i]);
        }
    }
    return res;
}

const arr1 = [0, 1, 2, [3, 4, [5, 6]]];

// console.log(flat(arr1, 2)); // [0, 1, 2, 3, 4, [5, 6]]
// console.log(flat(arr1, 2)); // [0, 1, 2, 3, 4, 5, 6]