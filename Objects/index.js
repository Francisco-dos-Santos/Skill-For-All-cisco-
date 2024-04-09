let point={
    x:0,
    y:0,
    moverHorizotally:function (distance){
        this.x=this.x+distance;
        console.log("that is value the distance: "+ this.x);
    },
    moverVertically:(distance)=>{
        this.y=this.y + distance;
    }
}
console.log(point.x);
// call method
point.moverHorizotally(30);
console.log(point.x);

let contact={
    tel:"932925647",
    email:"franciscodosstn@gamil.com"
}
console.log(contact);
// add objects
contact.email={
    work_1:"francisco@gamil.com",
    work_2:"franciscodoswork@gmail.com"
}
// after to add
console.log(contact);
// percorrendo objects with keys computers
for(i=0; i<2; i++){
    let keys=Object.keys(contact.email);
    console.log(`${keys[i]}: ${contact.email[keys[i]]}`);
}
if(contact.notes){
    console.log(contact.notes="something really important");
}else{
    console.log("não existe property com name notes");
}

/*
Vamos tratar um objeto como uma coleção de elementos com determinadas chaves e valores.
Adicionar e modificar elementos é feito com o uso de notação de ponto ou notação de colchete e 
uma chave (ou seja, nome da propriedade).
Usamos o comando "delete" para excluir um elemento.
*/ 
let anotherPetsObj = {"snakes": 1,"cats": 3,"dogs": 2};
anotherPetsObj.snakes = 2;
console.log(anotherPetsObj.snakes); // -> 2
delete anotherPetsObj.snakes;
console.log(anotherPetsObj.snakes); // -> undefined

// Para percorrer os elementos armazenados no objeto, podemos usar, entre essas chaves 
//de método estático(key,values,entries) do constructor object.
// Podemos percorrer cada uma das matrizes usando o método forEach, por exemplo:
Object.keys(anotherPetsObj).forEach(key=>console.log(key)); // -> snakes -> cats -> dogs
Object.values(anotherPetsObj).forEach(key=>console.log(key)); // -> 1 -> 3 -> 2
Object.entries(anotherPetsObj).forEach(key=>console.log(key)); // -> ["snakes", 1] -> ["cats", 3] -> ["dogs", 2]

//  o metodo for of, não funciona para percorrer objectos então nós podemos usar o metodo for in
for (let key in anotherPetsObj) {
    console.log(key); // -> snakes -> cats -> dogs
    console.log(anotherPetsObj[key]); // -> 1 -> 3 -> 2
}

/**
 Também podemos usar o operador spread para objetos, mais você pode usá-lo apenas para passar 
 as propriedades de um objeto para outro objeto , diferente do que para matrizes ou mapas.
 */
 let petsObj = {"cats": 1, "dogs": 3, "hamsters": 2};
 let newPetsObj = {...petsObj, "sharks": 1}; // -> {cats: 1, dogs: 3, hamsters: 2, sharks: 1}
 