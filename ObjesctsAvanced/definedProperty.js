let contact={};
// method used for alterar e set values at property existing
Object.defineProperty(contact,"_age",{
    value:36,
    writable:true,
    enumerable:true,
    configurable:true
});
let keys= Object.keys(contact);
let allkeys=Object.getOwnPropertyNames(contact);


// factory create object with class
let createPoint=function(x,y){
    let obj={};
    obj.x=x;
    obj.y=y;
    return obj;
};
// this function if resume to functio factory 
/*
let createPoint=function(x,y)
{ return{x,y}// that create a object width property x,y
}
*/
// let point1=createPoint(2,1);
// let point2= createPoint(4,2)

// constructor with new keyword
let coloredPoint=function(x,y,color) {
    let info="...object under constructor";
    let _color=color;
    console.log(info);

    this.x=x;
    this.y=y;
    this.getColor=function(){return _color};
}
let coloredP1=new coloredPoint(1,2,"red");
let coloredP2=new coloredPoint(3,4,"yellow");
console.log(coloredP1.getColor());

// create obejct empty
let emptyObject = new Object();
// crerte with methods the objets
let emptyObj=Object.create(null);
console.log(typeof emptyObj.constructor);