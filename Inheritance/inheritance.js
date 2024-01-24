console.log("testando");
const Vihicle = class{
  constructor({id,latitude,longitude}){
    this.id=id;
    this.status="unvalible";
    this.setPosition({latitude,longitude});
  };
  setPosition({latitude,longitude}){
    this.time=Date.now();
    this.latitude=latitude;
    this.longitude=longitude;
  };
  getPosition(){
    return {
      latitude:this.latitude,
      longitude:this.longitude,
    };
  };
};

// aplicating inheritance
class Bus extends Vihicle{
  constructor({seats,id,latitude,longitude}){
    super({id, latitude, longitude});
    this.seats=seats;
  };
}

// let vihicle=new Vihicle({id:"LA50", longitude:19.45665,latitude:57.4847})
// console.log(vihicle);

// let bus = new Bus({seats:40,latitude:19.4665,id:"BA89",longitude:25.78643});
// console.log(bus);

// shadowing in class
class AlmostEmptyClass { 
  constructor(sth) { 
      console.log(sth); 
  }; 
  sayHi() { 
      console.log("Hi!") 
  }; 
}; 
class ExtendedClass extends AlmostEmptyClass {
  constructor(name) {
    super("I’m super ...");
    this.name = name;
};
  sayHi() { 
    console.log(`Hi ${this.name}!`); 
  };
  newHi() {
    this.sayHi();
  }
  oldHi() {
    super.sayHi();
  };
};
let obj = new ExtendedClass("Bob"); // -> I’m super ...
obj.sayHi();    // -> Hi Bob!
// obj.newHi();    // -> Hi Bob!
// obj.oldHi();    // Hi!