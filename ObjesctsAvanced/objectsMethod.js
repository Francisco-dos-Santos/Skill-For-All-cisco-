// section one about objects
let circle ={
    radius:100,
    center:{
        x:10,
        y:20
    },
    getType:function(){
        return "circle";
    },
    getType2(){
        return typeof this.radius ==="number"?"circle":"unknow";
    }
}

console.log(circle.radius);
let figure={...circle};

// section 2

let contact={
    _tel:"932-925-647",
    get tel(){return this._tel;}, /*getter property to method get */
    set tel(t){return this._tel=t;} /*setter property to method set, recibe one parametrs */
};
// call methods with get or set
console.log(contact.tel);
// setter value to property the name _tel with method set
contact.tel="934-789-490";
// console.log(contact.tel);


// section 3 about objects
let contact2={
    _age:39,
    firstName:"Francisco",
    lastName:"Dos Santos",
    get fullName(){return `${this.firstName} ${this.lastName}`},
    get age(){return this._tel;},
    set age(a){if(a > 0)this._tel=a;}
}
console.log(contact2.fullName);
contact2.age=-20;
console.log(contact2.age)
// used for loops the all property to object selected
let keys=Object.keys(contact2);
// that methods let getter info the property selected
let  desc=Object.getOwnPropertyDescriptor(contact2,"firstName");
console.table(desc);
