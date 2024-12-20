let multiply = (a, b) => { let res = 0; for (let i = 0; i < b; i++) { res += a; } return res; }
let divide = (a, b) => { let res = 0; while (a >= b) { a -= b; res++; } return res; }
let modulo = (a, b) => { while (a >= b) { a -= b; } return a; }