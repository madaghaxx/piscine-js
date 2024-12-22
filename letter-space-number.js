let letterSpaceNumber = (str) => {
    let res = [];
    const check = /[a-z]{1}+\s + [0 - 9]{1}/g;
    let match = str.match(check);
    if (match) {
        res.push(match);
    }
    return res;
}