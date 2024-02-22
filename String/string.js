console.log('testando');
// working property string
let strings = [undefined, "", "ab", "cd ef", 4, null];
for(let i=0; i< strings.length; i++) {
    strings[i] && strings[i].length && console.log(strings[i].toUpperCase());
}
let title = "Alien 10";
console.log(title[0].toLowerCase()); // -> A
// console.log(title.charAt(0)); // -> A