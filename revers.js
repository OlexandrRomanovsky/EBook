let str = "11-15-1944";

function transform(str) {
    let ret = str.split("-").reverse();
    return ret;
}

console.log(transform(str));