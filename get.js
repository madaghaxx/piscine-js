let get = (src, path) => {
    let arr = path.split(".");
    let res = src;
    for (let i = 0; i < arr.length; i++) {
        res = res[arr[i]];
    }
    return res;
}