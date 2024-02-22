let boolObj1 = new Boolean;            // -> 0
let numberObj2 = Number(100);       // -> 100
let numberObj3 = Number("200");     // -> 200
let numberObj4 = new Number("abcd");    // -> NaN
let numberObj5 = Number(9e10000);   // -> Infinity
console.log(`numberObj1 : ${typeof boolObj1} : ${ boolObj1.valueOf()}`); 
console.log(`numberObj2 : ${typeof numberObj3} : ${ numberObj3.valueOf()}`);
let a = 12345;
console.log(a.toExponential());
// method toFixed
let nr1 = 10.55;
console.log(nr1.toFixed(1)); // -> 10.550
let nr2 = 2.55;
console.log(nr2.toFixed(1)); // -> 2.5
console.log(nr2.toFixed(20))

// method toLocaleString
let nr = 123456.789;
console.log(nr.toLocaleString("en-GB"));
console.log(nr.toLocaleString("ar-EG")); //-> ١٢٣٬٤٥٦٫٧٨٩
console.log(nr.toLocaleString("pt-PT",{
    style: "currency",
    currency: "EUR"
})); //-> 123.456,79 €
console.log(nr.toLocaleString());
