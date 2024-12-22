let get = (src, path) => {
    let arr = path.split(".");
    let res = src;
    for (let i = 0; i < arr.length; i++) {
        if (!res[arr[i]]) {
            return undefined;
        }

        res = res[arr[i]];
    }
    return res;
}
// get({ nested: { key: 'value' } }, 'nx.nx')