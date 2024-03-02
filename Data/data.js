console.log('testing datas');
let date = new Date(0); //UTC+0 pegar o fuso 
let datetwo = new Date(1000*60*60*10);
console.log(date.toUTCString()); // -> Thu, 01 Jan 1970 00:00:00 GMT
console.log(datetwo.toUTCString()); // -> Thu, 01 Jan 1970 10:00:00 GMT

console.log(datetwo.getTimezoneOffset()); // -> -60 pega a distancia do tempo em minuto com UTC+0 and local date
console.log(datetwo.toLocaleString()); // -> 01/01/1970, 11:00:00
console.log(datetwo.toISOString()); // -> 1970-01-01T10:00:00.000Z pega no formato ISO

/*
date3 = new Date("2020-02-02T20:20:00.000"); // o ideal para pegar data com string usa form ISO
date4 = new Date("2020-02-02T20:20:00.000Z");
console.log(date3.toLocaleString()); // -> 02/02/2020, 20:20:00
console.log(date3.toUTCString()); // -> Sun, 02 Feb 2020 19:20:00 GMT
console.log(date4.toLocaleString()); // -> 02/02/2020, 21:20:00
console.log(date4.toISOString()); // -> 2020-02-02T20:20:00.000Z
console.log(date4.toUTCString()); // -> Sun, 02 Feb 2020 20:20:00 GMT
console.log(date3.getTime()); // -> 1580671200000
console.log(date4.getTime()); // -> 1580674800000
console.log(date4.getTime() - date3.getTime()); // -> 3600000
*/
let now = Date.now(); // timestamp pegar hora atual da maquina
let nowObj = new Date(now);
console.log(`now : ${typeof now} : ${now}`);
console.log(`now : ${typeof nowObj} : ${nowObj}`);

// especificçoes de tempo com compenentes indidviduais
/*let date1 = new Date(2020, 6);
let date2 = new Date(2020, 6, 8);
let date3 = new Date(2020, 6, 8, 10);
let date4 = new Date(2020, 6, 8, 10, 20, 45);
console.log(date1.toLocaleString()); // -> 01/07/2020, 00:00:00
console.log(date2.toLocaleString()); // -> 08/07/2020, 00:00:00
console.log(date3.toLocaleString()); // -> 08/07/2020, 10:00:00
console.log(date4.toLocaleString()); // -> 08/07/2020, 10:20:45
*/

/*let date1 = new Date("2020-07-08");
let date2 = new Date("2020-07-08T10:20:00");
let date3 = new Date("2020-07-08T10:20:00Z");

console.log(date1.toLocaleString()); // -> 
console.log(date2.toLocaleString()); // -> 
console.log(date3.toLocaleString()); 
*/
let date1 = new Date("Mon Mar 02 2020 10:00:00");
let date2 = new Date("Mon March 2 2020 10:00");
let date3 = new Date("Mar 02 2020 10:00:00");
let date4 = new Date("2 March 2020, 10:");
let date5 = new Date("3.2.2020");
let date6 = Date("03/02-2020, 10:00");
let date7 = new Date("2020, 10:00");
let date8 = new Date("2020 march-02, 10:00");
let date9 = new Date("3.2.2020 GMT+0400");
let date10 = new Date("Mon Mar 02 2020 10:00:00 UTC-4");

console.log(date5.toLocaleString()); // ->
console.log(date6.toLocaleString()); // ->
console.log(date7.toLocaleString()); // ->
console.log(date8.toLocaleString());
console.log(date9.toLocaleString());
console.log(date10.toLocaleString());

let dat1 = new Date(2020, 6, 8, 10, 20, 0);
let dat2 = new Date(2020, 6, 9, 10, 20, 0);
console.log(dat2.getTime() - dat1.getTime()); // -> 86400000 -> 1000 x 60 x 60 x 24
let startTime = Date.now();
for(i=0; i<10000000; i++){}
let endTime = Date.now();
console.log(endTime - startTime); //quantos millsegundos seriam apara executar 10milhões interações de for vazio

// operação de componente individual de hora e data
/*
getFullYear – obtendo um número que identifique o ano (hora local)
getUTCFullYear – obtendo um número que identifique o ano (hora UTC+0)
setFullYear – definindo o valor do ano novo (hora local)
setUTCFullYear – definindo o valor do ano novo (hora UTC+0)

cada method sempre tera esses quatros componetes (2 get e 2 set)

ano: getFullYear,
mês: getMonth (lembre-se de que os meses são contados a partir de 0 em JavaScript)
dia do mês: getDate,
dia da semana: getDay (os dias da semana são contados a partir de 0 – o primeiro dia é domingo)
hora: getHours,
minutos: getMinutes,
segundos: getSeconds,
milissegundos: getMilliseconds.

toLocaleDateString - pega a cadeia de catectere da data local  
toLocaleTimeString. -pega a cadeia de catectere da hora local
*/

let dates = new Date("2020-07-08T10:20:00"); // ideial para pegar data em string
console.log(dates.getMonth()); // -> 6 
console.log(dates.getDay()); // -> 3
console.log(dates.getDate()); // 8
console.log(dates.getHours()); // -> 10
dates.setHours(12);
console.log(dates.getHours()); // -> 12
console.log(dates.toLocaleDateString()); // -> 08/07/2020
console.log(dates.toLocaleTimeString()); // -> 12:20:00

 