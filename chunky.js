let chunk = (arr, size) => {
    let result = [];
    let arrr = [];
    for (let i = 0; i < arr.length; i++) {
        arrr.push(arr[i]);
        if (arrr.length === size || i === arr.length - 1) {
            result.push(arrr);
            arrr = [];
        }
    }
    return result;
}
// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));