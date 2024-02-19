console.log('boa testando');


function factorial(a){
  return a > 1? a*factorial(a-1):1;
} 
// console.log(factorial(4));

let numbers=[50,10,40,30,20];
// ordernar em ordem crecente
let compareNumbers = (a,b)=>{
  let retV=0;
  if(a<b){
    retV =-1;
  }else if(a>b){
    retV=1;
  }
  return retV;
}

// const sorted=numbers.sort(compareNumbers);
// const sortedDecrescent=numbers.sort(compareNumbers);
//short form 
// const sortShort=numbers.sort((a,b)=>a-b);
const sortShort2=numbers.sort((a,b)=>b-a);
// console.log(sortShort2);

const sortShort=numbers.sort((a,b)=>a-b);
// console.log(sortShort);



let add=(n1,n2)=>
  !Number.isInteger(n1) || !Number.isInteger(n2) ? NaN: n1+n2;

let sub=(n1,n2)=>
  !Number.isInteger(n1) || !Number.isInteger(n2) ? NaN: n1-n2;

  let mult=(n1,n2)=>
  !Number.isInteger(n1) || !Number.isInteger(n2) ? NaN:n1+n2;

let action=(callback,n1,n2)=>{
    return callback(n1,n2)
  }


// console.log(action(add,12,10))
// console.log(action(sub,12,10))

function print10Times(){
  let count=1;
  let print=setInterval(()=>{
    console.log(count++)
  },1000)

  setTimeout(function(){
    clearInterval(print)
  },
  10000)
}
// print10Times()

let fibb = function(n){
  let f1=0,f2=1;
  for(let i =2;i<=n;i++){
    let retV=f1;
    f1=f2;
    f2=f2+retV
    console.log(retV+'+'+f1,f2)
  }
  return f2
}
// console.log(fibb(7))


// let fibbRec=(n)=>{
//   let retV=0
//   if(n!= 0){
//     if(n===1){
//       retV=1;
//     }else {
//       retV = fibbRec(n-1) + fibbRec(n-2)
//     }
//   }

//   return retV;
// }

let fibbShort = n => n==0 ? 0 : (n===1 ? 1 : fibbShort(n-1) + fibbShort(n-2));
// console.log(fibbShort(4));

let contacts=[
  {
    name:'Manuel Firmino',
    phone:'(+244) 935645465',
    email:'manuefirmino@gmail.com'
  },
  {
    name:'Meury Faria',
    phone:'(+244) 955676474',
    email:'meuryfaria@gmail.com'
  },
  {
    name:'Miguel Pedro',
    phone:'(+244) 912348473',
    email:'miguelpedro@gmail.com'
  }
];

let showContact=(list,index)=>{
  if(!(list instanceof Array) || !list[index]){
    return console.warn('the paramentrs not is a array or not is interger');
  }
  console.log(list[index].name);
  console.log(list[index].phone)
  console.log(list[index].email)
}
// showContact(contacts,2)

let showAllContact= (list,sort) =>{
  if(!(list instanceof Array)){
    return console.warn('the paramentrs not is a array ');
  }
  for(let contact of list){
    if(sort){
      console.log(`${contact[sort]}`);
    }else{
      console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
    }
  }
}
// showAllContact(contacts)
function addNewContacts(list,{name,email,phone}){
  if(list instanceof Array){
    if(name && email && phone){
      list.push({name,email,phone});
    }else{
      console.log('um dos campos do dados do user está vazio')
    }
  }else{
    console.warn('não é um array o argumento');
  }
}

function showContactsForSort(list,sort){
  if(list instanceof Array && sort){
    for(let contact of list){
      console.log(`${contact[sort]}`);
    }
  }
}

addNewContacts(contacts,{name:'Francisco',phone:'932',email:'francisco@gmail.com'})
showAllContact(contacts,'phone')
// showContactsForSort(contacts,'phone')
