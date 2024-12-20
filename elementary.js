let multiply = (a, b) => {
    let res = 0;
    if (a < 0 && b < 0) { a = -a; b = -b; }
    else if (a < 0) { a = -a; b = -b; }
    else if (b < 0) { a = -a; b = -b; }
    for (let i = 0; i < b; i++) { res += a; } return res;
}
// console.log(multiply(123, -22))


let divide = (a, b) => { let res = 0; while (a >= b) { a -= b; res++; } return res; }
// console.log(divide(10, 3)) // 3


let modulo = (a, b) => { while (a >= b) { a -= b; } return a; }
// console.log(modulo(10, 3)) // 1