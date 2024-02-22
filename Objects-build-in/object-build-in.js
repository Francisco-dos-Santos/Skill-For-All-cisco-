let numberObj1 = new Number();            // -> 0
let numberObj2 = new Number(100);       // -> 100
let numberObj3 = new Number("200");     // -> 200
let numberObj4 = new Number("abcd");    // -> NaN
let numberObj5 = new Number(9e10000);   // -> Infinity
console.log(`numberObj1 : ${typeof numberObj1} : ${ numberObj1.valueOf()}`); // -> numberObj1 : object : 0