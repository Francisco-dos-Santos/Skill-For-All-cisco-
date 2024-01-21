// Refencer de objects com clonagem
let point0={x:10,y:20};
let point1=point0;
let point2={};
Object.assign(point2,point0);
console.log(point2.y);
console.log(point1===point0);
console.log(point1===point2);
// clonagen profunda e superficial
let circle={
    radius:100,
    center:{
        x:100,
        y:100
    },
    arc:{
        x:30,
        z:50
    },
};
let circle2 =deepClone(circle);
circle.radius=200;
circle.center.x=200;
circle2.arc.x=60; 
console.log(circle2);
console.log(circle.center===circle2.center);
console.log(circle);

// clonagem profunda recursão( for clonar objects nested)
function deepClone(obj){
    let newObj={...obj};
    for(property in newObj){
        if(typeof newObj[property]==="object"){
            newObj[property]=deepClone(newObj[property]);
        }
    }
    return newObj;
}