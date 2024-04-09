console.log("boas muito massa");
/*
  work width condtructor (conssite em key and value);
  // ===============CONSTRUCT SET=================
  Constructr Set: é usado para criar uma coleção de elementos exclusivos(únicos),
  Qualquer tentativa de adicionar um elemento que já esteja na coleção será ignorada.
  Fornece methods para verificar se há um elemento específico em nossa coleção e revisa todos 
  os elementos um a um (ou seja, retirando-os da bolsa).Eles não são ordenados e não têm uma 
  posição especifica e diferem do array. Podem armazenar valores de tipo simples e compostos.
  size-is property  verifica a quantidade de elementos na coleção.     
  has-is property verifica se elemento passado como arguemento existe na coleção return True ou false.
  add-add new elemento na coleção
  delete-remove o elemento passado como argu caso não existe return false.
  clear-limpa a coleção inteira
  forEach -method percorre cada elemento da coleção e recebe arguments.
  values- methds mais usado em relação ao forEach, também percorre ,requer um novo conceito mais 
  tem o conceito de interadores.
  interadores- é um object que armazena informações sobre o a coleção visitado,ele fornece methods next.
  next- permite mover para o próximo elemento de coleção, chamar ele em seguida return um object que 
  contem o campo value.Além do value, há outro campo done, que nos informará se o item visitado 
  atual é o último da coleção.
  Keys - é um method identico ao do values
*/
let emptySet = new Set(); //-> {}
console.log(emptySet.size); //-> 0
let petsSet = new Set(["cat", "dog", "cat"]); // -> {"cat", "dog"}
console.log(petsSet.size); //-> 2
console.log(petsSet.has("cat")); //-> true
console.log(petsSet.has("shark")); //-> false
console.log(petsSet.size); //-> 2
petsSet.add("shark");
petsSet.add("hamster");
console.log(petsSet.size); //-> 4
console.log(petsSet.has("shark")); //-> true
petsSet.delete("dog"); // -> true
petsSet.delete("dog"); // -> false
console.log(petsSet.size);// -> 3
// petsSet.clear();
console.log(petsSet);//-> 0
petsSet.forEach((value, key) => console.log(`(${value}:${key})`)); 

// usando o method values
let petsIterator = petsSet.values();
console.log(petsIterator.next().value); // -> cat
console.log(petsIterator.next().value); // -> dog
console.log(petsIterator.next().value); // -> hamster
petsIterator = petsSet.values();
let result = petsIterator.next();
while (!result.done) {
    console.log(result.value); // -> cat -> dog -> hamster
 result = petsIterator.next();
}

// Usando o operator spread no set
/*
o operator spread é usado para dividir a coleção em um único elemento,
e podemos usar se quisermos converter uma coleção em array ou passá-la como argumento de função.
*/
console.log(petsSet instanceof Set); // -> true
let petsArray = [...petsSet]; // -> ["cat", "dog", "hamster"]
console.log(petsArray instanceof Array); // -> true


// ===============CRONSTRUCTR Map==============
// 
/*
Essa construção é semelhante a um objeto comum, onde nomes de propriedade são chaves, 
às quais atribuímos valores.
O importante é que cada elemento dessa matriz também é uma matriz, uma matriz de dois elementos.
A chave será armazenada na posição zero do primeiro valor.
Gerenciamos nossa coleção usando os métodos has, set, get, delete e, clear.
para percorrer usaremos o mesmo method que apredemos no set: forEach,
values - acontence o mesmo no set, o valor é retitado a chave é ignorada
keys- também retorna um iterador, só que desta vez sua chave é retirada de cada elemento, não seu valor.
entries- o method igual ao iterador values e outros só que ele retorna a chave e o valor como uma matriz de dois elementos
*/

let emptyMap = new Map();
let petsMap = new Map([["cats", 1],[ "dogs", 2],[ "hamsters", 5]]);
console.log(emptyMap.size); // -> 0
console.log(petsMap.size); // -> 3
console.log(petsMap.has("dogs")); // -> true
console.log(petsMap.has("sharks")); // -> false
console.log(petsMap.get("hamsters")); // -> 5
petsMap.set("hamsters", 6);
console.log(petsMap.get("hamsters")); // -> 6
petsMap.delete("hamsters");
console.log(petsMap.get("hamsters")); // -> undefined
petsMap.clear();
console.log(petsMap.size); // -> 0

let anotherPetsMap = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);

anotherPetsMap.forEach((value, key) => console.log(`${key} : ${value}`));
let petValuesIterator = anotherPetsMap.values();
console.log(petValuesIterator.next().value); // -> 1

let petKeysIterator = anotherPetsMap.keys();
console.log(petKeysIterator.next().value); // -> snakes

let petsIterator2 = anotherPetsMap.entries();
let resulte = petsIterator2.next();
while (!resulte.done) {
    console.log(resulte.value); // -> ["snakes", 1] -> "cats", 3] -> ["dogs", 2]
 resulte = petsIterator2.next();
}

// Com o propósito de percorrer as coleções(ou seja array,map,set,) foi criado em JavaScript – o for(let key of keys)
let petsmap = new Map([["cats", 1], ["dogs", 3], ["hamsters", 2]]);
for( let pet of petsmap) {
    console.log(pet); // -> ["cats", 1] -> ["dogs", 3] -> ["hamsters", 2]
    console.log(pet[0]); // -> cats -> dogs -> hamsters
}

petsMap = new Map([["cats", 1], ["dogs", 3], ["hamsters", 2]]);
console.log(petsMap instanceof Map); // -> true
petsArray = [...petsMap]; // -> [["cats", 1], ["dogs", 3],["hamsters", 2]]
console.log(petsArray instanceof Array); // -> true