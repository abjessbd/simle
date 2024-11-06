const callback = (cb) =>{
    const a = 10;
    const b = 12;
    const total = a + b;
    return cb(total);
}

// const squire = (value) =>{
//     return value ** 2;
// }

// const grandTotal = callback(squire);

// console.log(callback());
console.log(callback(val => val ** 2));