
let array1 = [10, 20, 30];
let array2 = ["cat", "dog"];
// esse metodo não altera o arrya original cria uma copia
let array3 = array1.concat(array2);
console.log(array3);
// Metdos the Arrays
// push -add item na ultima posição do array afecta o original
// unshift -add no inicio do array afecta o original
// pop- chamados sem argumentos remove item no final do array e retornam o valor 
// shift - chamados sem argumentos remove item no inicio do array e retornam o valor 
array3.push(50,'purpe');
console.log(array3.pop());
console.log(array3);
array3.unshift(50,'cat',80);
console.log(array3.shift());
console.log(array3);
/*
podemos remove e add array sem method:
delete- remove o elemento mais deixa a posição como undefined
add - podemos add item assim: array3[11]='item; se faltar espaços preenchidos com undefined
*/

// Esse methods follews recebem uma função com argumento
//method forEach- esse method recebe 3 argument(item,index,array) ele percorre cada elemento do array
array1.forEach( (item, index) => console.log(`${index} : ${item}`));
/* 
some- method- retorna true se pelo menos um dos item satisfazem a condição dada,retorna false se não forem
every- method- retorna true se todos os item satisfazem a condição dada,basta ter um false rertona
*/
let anyNumberPresent = array3.some(item => typeof item === "number");
console.log(anyNumberPresent)
array2 = [90, 80, 10, 20, 30, 100,50];
let allPositive = array2.every(item => item > 0); // -> true
console.log(allPositive)