
let array1 = [10, 20, 30];
let array2 = ["cat", "dog"];
// esse metodo não altera o array original cria uma copia
let array3 = array1.concat(array2);
// console.log(array3);
// Metdos the Arrays
// push -add item na ultima posição do array afecta o original
// unshift -add no inicio do array afecta o original
// pop- chamados sem argumentos remove item no final do array e retornam o valor 
// shift - chamados sem argumentos remove item no inicio do array e retornam o valor 
array3.push(50,'purpe');
console.log(array3.pop());
// console.log(array3);
array3.unshift(50,'cat',80,90);
console.log(array3.shift());
// console.log(array3);

/*
podemos remove e add array sem method:
delete- remove o elemento mais deixa a posição como undefined ex: delete array[2]
add - podemos add item assim: array3[11]='item; se faltar espaços preenchidos com undefined
*/

/* 
// Esse methods follews recebem uma função como argumento, e podem receber 3 argumentos(item,index,array).
some- method- retorna true se pelo menos um dos item satisfazem a condição de teste,retorna false se não forem.
every- method- retorna true se todos os item satisfazem a condição de teste,basta ter um false rertona.
filter- method- cria e retorna os dados da matriz original que satisfazem a condição de teste.
map- method - cria e retorna os dados da martiz original alterado pela acção realizada com o mesmo length
forEach- method- esse method ele percorre cada elemento do array.
*/

array1.forEach((item, index) => console.log(`${index} : ${item}`));

let anyNumberPresent = array3.some(item => typeof item === "number");//-> true

array2 = [90, 80, 10, 20, 30, 100,50];
let allPositive = array2.every(item => item > 0); // -> true

// console.log(array3); // -> 8
let numbers = array3.filter(item => typeof item === "number");

let squarePower = array3.filter(item => typeof item === "number").map(item => item*item);
console.log(squarePower);

/*
Desta vez estamos operando em metodos que afectam o array original e não estamos a cria uma copia.
sort - method - 'recebe como arg uma função, que recebe 2 arg o first e and o second, se acharmos que 
o first elemento é menor que o second retornamos -1(negatiive), ou se o first é maior que o second
retornamos 1 (positve), se forem iguais retorna 0 - ele classifica o array de acordo a classificão 
passada na função'.
reverse- method -inverte acordem do array alterando o array original não se passa argumento 
*/
// essa função verifica a ordem e classfifca o array(elementos menores virão primeiro que os maiores)

// console.log(numbers[0]);
// numbers.sort((first, second) => {
//   if( first < second) {
//       return -1
//   } else if(first == second) {
//       return 0;
//   } else {
//       return 1;
//   }
// });
numbers.sort((first, second) =>  first - second);
console.log(numbers[0]); // -> 10
numbers.reverse();
console.log(numbers[0]); //-> 80

/*
reduce -method - passa cada elemento da matriz começando da esquerda e para cada elemento a função
passada é chamada.  E retorna uma redução do array. A funçao recebe 2 arg(accumulator , item).
accumulator- nesse parametro o valor retornado pela chamada anterior da função redutora é passado.
esse method começa a percorrer a matriz ignorando o first elemento(10) para retornar no accumulator 
o first elemento(10) e somar com o elemento aseguir(20),(o resultado dessa função  e passado no accum).
esse method aceita um outro parametro que é o valor inicial(1000) se for passado o first elemento não será
ignorado e o accumulator recebe de primeira o valor inicial(1000)
*/
let sum = numbers.reduce((accumulator, item) => accumulator + item);
// console.log(sum); // -> 190

let strangeObj = numbers.reduce((accumulator, item, index) => {
  accumulator[index] = item;
  return accumulator;
} ,{});
// console.log(strangeObj); //-> {"0": 10,"1": 20,"2": 30,"3": 50,"4": 80}


/* 
Procurando elementos.(methods da construtor)
Esses methods tomam como argumento o valor que estamos procurando na matriz.
includes- retorna (true) se o argumento passado existe, caso contrario (false)
indexOf - retorna o indice do primeiro elemento da matriz que corresponde ao argumento passado,
começando da esquerda(no inicio) a direita, caso contrario retorna -1.
lastIndexOf - quase semelhante ao indexOf, só que esse começa da direita(no final) da matriz
find- method - recebe como parametro uma funçao com teste de condição, retorna valor se um 
item satisfaz a condição dada e termina a pesquisa, se nenhum item for retorna undefined.
findIndex - retorna o indice se for bem sucessido, caso contrio retorna -1.
*/
let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
// console.log(myPets.includes("shark")); // -> true
console.log(myPets.includes("unicorn")); // -> false 
// console.log(myPets.indexOf("unicorn")); // -> -1
// console.log(myPets.indexOf("dog")); // -> 1
console.log(myPets.lastIndexOf("dog")); // -> 6

// console.log(myPets.find(item => item.length > 3)); // -> hamster
console.log(myPets.find(item => item.includes("og"))); // -> dog
// console.log(myPets.findIndex(item => item.length > 3)); // -> 2
console.log(myPets.findIndex(item => item.includes("og"))); // -> 1

/*
slice-method não afecta o array original, recebe 2 agr (slice(arg1,arg2)), copia uma parte selecionada do array;
arg1-determina o indice onde começamos a copia(se for negativo começa a copia do ffinal do array);
se for omitido o segundo arg, ele copia do indece indicado até o final do array(slice(2)); 
arg2- é o indice onde a vai terminar a copia do array(o elemento desse indice não será copiado);
*/
let p1 = myPets.slice(3); // ->  ["canary", "shark", "cat", "dog"]
let p2 = myPets.slice(3, 5); // -> ["canary", "shark"]
let p3 = myPets.slice(-3); // -> ["shark", "cat", "dog"]
let p4 = myPets.slice(-3, -1); // -> ["shark", "cat"]
// console.log(p4);
// console.log(myPets);

/*
splice- method altera o array original, usados de 2 maneira.
1 maneira: remover os elementos recebe 1 ou 2 argumentos, 1 arg- o indece do primeiro elemento
a ser removido, 2 agr- é números de elementos a serem removidos, se for negativo o indece(inicia do final);
caso não for passado o segundo remove do indece até o final do array e ele retorna os elementos exclidos.

2 maneira : pode ser usado para inserir new elementos no array, devem sem passados os 2 arg falados
anteriormente, se não queremos excluir nada passamos no segundo arg(0), todo argumento subsequentes
fornecemos os valores que serão localizados na matriz.
Nota:podemos usar para remover varios elementos selecionados e inserir novos em seu lugar ou podemos add 
novos do indice indicado sem remover os existentes,
*/
let removedPets = myPets.splice(2, 3); 
console.log(myPets); // -> ["cat", "dog", "cat", "dog"]
console.log(removedPets); // -> ["hamster", "canary", "shark"]
// add elementos
myPets.splice(2, 0, "hamster", "canary", "shark")
console.log(myPets);

// Falando de Desestruturação
/* 
  Desestruturação refece se não quisermos copia um item do array, podemos deixar um espaço em branco 
  separado por virgulas,se um elemento não for encotrados no array retorna undefined.
  A atribuição de desestruturação nos permite preparar valores padrão, que serão usados 
  se não houver nenhum elemento no array (caso contrário, o valor padrão será ignorado).
*/
myPets = ["cat", "dog", "hamster", "canary"];
let [pt1, , pt3, pt4] = myPets;
console.log(pt1);
myPets = ["cat", "dog"];
let [pet1 = "fish", , pet3 = "fish"] = myPets;
console.log(pet1); // -> cat
console.log(pet3); // -> fish

// SPREAD OPERATOR operador spread (ou seja, três pontos).
/*
  Ele permite a separação do array em elementos individuais onde uma lista(array,objects) 
  de elementos ou argumentos é esperada.
  O exemplo mais simples é usar elementos de um array existente para criar uma nova.
  também pode ser usado para espalhar o array sobre os elementos enquanto os transmite 
  como argumentos da função.
*/
array1 = [100, 200, 300];
array2 = [1000, 2000];
array3 = [10, 20, ...array1, 500, ...array2]; //-> [10, 20, 100, 200, 300, 500, 1000, 2000]
let testFn = (a, b, c, d) => a + b + c + d;
let array = [10, 20, 30,40];
console.log(testFn(...array)); // -> 100
console.log(...array);

