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
console.log(words); 