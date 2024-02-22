let boolObj1 = new Boolean;            // -> 0
let numberObj2 = Number(100);       // -> 100
let numberObj3 = Number("200");     // -> 200
let numberObj4 = new Number("abcd");    // -> NaN
let numberObj5 = Number(9e10000);   // -> Infinity
console.log(`numberObj1 : ${typeof boolObj1} : ${ boolObj1.toString()}`); 
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
// console.log(nr.toLocaleString("en-GB"));
console.log(nr.toLocaleString("ar-EG")); //-> ١٢٣٬٤٥٦٫٧٨٩
// console.log(nr.toLocaleString("pt-PT",{style: "currency",currency: "EUR"}));//-> 123.456,79 €
console.log(nr.toLocaleString());

// property static and method static in number
// console.log(Number.MAX_VALUE); // -> 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // -> 5e-324
// console.log(Number.MAX_SAFE_INTEGER); // -> 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER); //
let numbers = [2e100, 200000, 1.5, Infinity];
for(let i=0; i< numbers.length; i++) {
  // console.log(`is ${numbers[i]} Integer: ${Number.isInteger(numbers[i])}`);
  // console.log(`is ${numbers[i]} safe Integer: ${Number.isSafeInteger(numbers[i])}`);
  // console.log(`is ${numbers[i]} finite number: ${Number.isFinite(numbers[i])}`);
}
// avantagen de usar o parseInt em vez do Number
console.log(Number.parseFloat("123.12.12")); // -> 123.12
console.log(Number("123.12.12")); // -> NaN
console.log(Number.parseInt("1204px")); // -> 1204
console.log(Number("1204px")); // ->NaN
