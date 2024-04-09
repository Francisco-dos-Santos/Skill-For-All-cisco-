/**
  JSON é uma abreviação de JavaScript Object Notation, ou seja, um formato de dados baseado em texto.
  Ele é usado principalmente para enviar dados pela rede.
  Seu principal concorrente ainda é o formato XML, mas no caso do JavaScript, a escolha do JSON é simples.
  JSON é um formato de texto que permite que objetos e matrizes sejam armazenados.
  Para converter dados (objetos e matrizes) no formato JSON e vice-versa, de texto para objetos e matrizes, 
  um objeto JSON interno é usado em JavaScript. Neste caso, é realmente um objeto, não um construtor.
  Nós não o criamos, não o excluímos e não o modificamos. For do a modification with two methods: stringify and parse.
 */
  let vehicle2 = {
    id: "AK12113",
    longitude: 59.358615, 
    latitude: 17.947589,
    getId: function() {
        return this.id;
    }
};
console.log(vehicle2);
let vehicle2JSON = JSON.stringify(vehicle2);
console.log(typeof vehicle2JSON); // -> string
console.log(vehicle2JSON); // -> {"id":"AK12113","longitude":59.358615,"latitude":17.947589}

/*
  Acontece, no entanto, que não há nenhum rastreamento do método getId na variavel de destino,
  O que realmente estaria lá? Talvez o nosso código de método? JSON é um formato para troca de dados, 
  não informações sobre o programa, no momento da conversão o json trata o object como chave:valor.
*/
// Vamos tentar converter o objeto principal do navegador, a janela, para o formato JSON:
// A conversão não terá êxito devido à existência de ciclos neste objeto.

// JSON.stringify(window); // -> Uncaught TypeError: Converting circular structure to JSON

/*
  O formato JSON permite gravar não apenas objetos, mas também matrizes.
  Isso é necessário porque o campo de um objeto pode ser uma matriz.
*/
let Vehicle = function(id, latitude, longitude){ 
  this.id = id;
  this.latitude = latitude;     
  this.longitude = longitude;
}; 
let ids = ["AK12113", "AL1024", "BA1001"];
let vehicles = [];
ids.forEach(id => vehicles.push(new Vehicle(id, 59.358615, 17.947589)));
let vehcilesJSON = JSON.stringify(vehicles);   //->[{"id":"AK12113","latitude":59.358615,...}]
console.log(vehcilesJSON);