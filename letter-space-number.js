let letterSpaceNumber = (str) => {
    let res = [];
    const check = /\w\s\d\b/g;
    let match = str.match(check);
    if (match) {
        res = res.concat(match);
    }
    return res;
}