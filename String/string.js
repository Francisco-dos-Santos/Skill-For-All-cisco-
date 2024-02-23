console.log('testando');
// working property string
let strings = [undefined, "", "ab", "cd ef", 4, null];
for(let i=0; i< strings.length; i++) {
    strings[i] && strings[i].length && console.log(strings[i].toUpperCase());
}
/* Nota: Os métodos prototype do construtor String não modificam a cadeia de 
  caracteres original, mas retornam uma cópia modificada dela. O mesmo acontece 
  com muitos methods to object and method arrays*/
let title = "Alien 10";
console.log(title[0].toLowerCase()); // -> A
// console.log(title.charAt(0)); // -> A

// split()- divide a string em substring e retorna uma array, passamos o argument para indicar que essas partes serão separads
let ipAddressStr = "127.0.0.1"
let ipParts = ipAddressStr.split(".");
console.log(ipParts);
// substitundo string with replaceAll
/*
Encadeamento de método (ou cascata) é chamar um método após o outro em uma linha de código. 
Os métodos são chamados em ordem da esquerda para a direita. 
Cada método subsequente é executado no resultado do método anterior. 
Os métodos não precisam ser de um tipo de objeto.
*/
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.";
let words = text.toLowerCase().replaceAll('.','').replaceAll(',','').split(' ');
// console.log(words);

// produrando string
let text2 = "One, two, three, one, two, three.";
console.log(text2.includes("two")); // -> true
// console.log(text2.substr(0,8)); // One, two
// console.log(text2.substr(-6)); //three
console.log(text2.indexOf("four")); // -> -1
// console.log(text2.lastIndexOf("two")); // -> 22
console.log(text2.substring(-11, 8)); // -> One, two
// console.log(text2.substring(5)); // -> two, three, one, two, three.
console.log(text2.slice(-11)); // -> two, three.
// console.log(text2.slice(-11, -8)); // -> two
console.log(text2.length)

//padding
/*Estes method permitem expandir o texto para um tamanho determinado o 
FIRST agurmento é o limite de expansão, o SECOND é o prenchimento, 
caso tiver só um agurmento o espaço por padrão vai preencher 
padStart - preenche no inicio da tring   
padEnd - preenche no final da string  */
let numbers = [100, 5, 66];
for(let i=0; i< numbers.length; i++) {
    console.log(String(numbers[i]).padStart(10, '0'));
    console.log(String(numbers[i]).padEnd(10, 'abc'));
    // console.log(String(numbers[i]).padStart(10));  
}

//trimming
/*
Estes methods remove whiteSpace the caracters(e.g . tabs, spaces, newline caracters)
the method are:trim ,trimLeft,trimRight, trimEnd,trimStart
*/ 
let city = " Bergen  ";
let street = " Dokkeboder";
console.log(city.trimStart().length); // -> 8 -> "Bergen  "
console.log(city.trimEnd().length); // -> 7 -> " Bergen"
console.log(city.trim().length); // -> 6 -> "Berge"
console.log(street.trim()); // -> 10 -> "Dokkeboder"


// comparison string
/*
A comparação é, naturalmente, realizada em ordem alfabética, 
ou seja, de acordo com a ordem das letras do alfabeto. Se as 
primeiras letras das cadeias de caracteres que estão sendo 
comparadas forem as mesmas, as próximas serão comparadas.
*/
// console.log("a" < "b"); // -> true
console.log("abc" < "acd"); // -> true
console.log("b" < "acd"); // false
console.log("brettesnes" > "Sundsfjord"); // -> true as minusculas são tratadas primeiro
console.log("Brettesnes" < "Sundsfjord"); // -> true 
console.log("Ørnes".localeCompare("Sundsfjord", "nn")); // -> -1 o primeiro agurment obrigatório é a comparação se for identico retorna 0
console.log("Ørnes".localeCompare("Brettesnes", "nn")); // -> 1 o second arguement representa o local(ex nn-noruega , en-inglish)