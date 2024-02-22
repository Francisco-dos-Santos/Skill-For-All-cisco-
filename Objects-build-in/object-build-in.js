let numberObj1 = new Number;            // -> 0
let numberObj2 = Number(100);       // -> 100
let numberObj3 = new Number("200");     // -> 200
let numberObj4 = new Number("abcd");    // -> NaN
let numberObj5 = Number(9e10000);   // -> Infinity
console.log(`numberObj1 : ${typeof numberObj2} : ${ numberObj2.valueOf()}`); 
console.log(`numberObj2 : ${typeof numberObj5} : ${ numberObj5.valueOf()}`)