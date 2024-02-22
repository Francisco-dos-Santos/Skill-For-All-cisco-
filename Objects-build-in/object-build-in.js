let boolObj1 = new Boolean;            // -> 0
let numberObj2 = Number(100);       // -> 100
let numberObj3 = Number("200");     // -> 200
let numberObj4 = new Number("abcd");    // -> NaN
let numberObj5 = Number(9e10000);   // -> Infinity
console.log(`numberObj1 : ${typeof boolObj1} : ${ boolObj1.valueOf()}`); 
console.log(`numberObj2 : ${typeof numberObj3} : ${ numberObj3.valueOf()}`)