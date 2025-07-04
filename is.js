// const is = {}
is.num = (num) => typeof (num) == "number" ? true : false
is.nan = (nan) => Number.isNaN(nan) ? true : false
is.str = (str) => typeof (str) == "string" ? true : false
is.bool = (bool) => typeof (bool) == "boolean" ? true : false
is.undef = (x) => x === undefined ? true : false
is.def = (x) => x !== undefined ? true : false
is.arr = (arr) => Array.isArray(arr) ? true : false
is.obj = (obj) => typeof (obj) == "object" && !Array.isArray(obj) && obj !== null ? true : false
is.fun = (fun) => typeof (fun) == "function" ? true : false
is.truthy = (x) => x ? true : false
is.falsy = (x) => x ? false : true
