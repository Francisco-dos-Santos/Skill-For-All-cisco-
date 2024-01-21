function outer(){
    let name='outer';
    let str=inner();
    return str;
}
console.time("inner");
const inner=()=>{
    let name="inner";
    console.log(name);
    return "Hello !"; 
}
console.timeEnd("inner");
console.log("before outer() call");
console.log(outer());
console.log("after outer() call");

/*
let name="francisco dos santos";
try {
    throw consol.log(nam);
} catch (error) {
    console.log(error.message);
}finally{
    console.log("end");
}*/
let sum =(a,b)=>{return a+b};
console.log(sum(12,2));