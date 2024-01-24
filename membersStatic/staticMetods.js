console.log("static members")
/*Static: esses são campos que não aparecerão no objeto criado
 – eles serão associados apenas à classe. 
 podemos definir methods e property static em class 
 */
 class AlmostEmptyClass {
  constructor(sth) {
      console.log(sth);
  };
  sayHi() {
      console.log("Hi!")
  };
  static sayHello() {
      console.log("Hello!")
  };
};
let almostEmptyObject = new AlmostEmptyClass(120); // 120
almostEmptyObject.sayHi(); // -> Hi!
AlmostEmptyClass.sayHello(); // -> Hello!
// almostEmptyObject.sayHello(); // error

// tentando com outros methods
class Vehicle {
  constructor({id, latitude, longitude}){
      this.id = id;
      this.status = "unavailable";
      this.setPosition({latitude, longitude});
  };
  setPosition({latitude, longitude}) {
      this.time = Date.now();
      this.longitude = longitude;
      this.latitude = latitude;
  };
  getPosition() {
      return {
          latitude: this.latitude,
          longitude: this.longitude
      };
  };
  static isSameId(v1, v2){
    return console.log(v1.id === v2.id);
  };
};

let vehicle1 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
let vehicle2 = new Vehicle({longitude: 0, latitude: 0, id: "AL1024"});
let vehicle3 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1026"});
Vehicle.isSameId(vehicle1, vehicle2); // -> true
Vehicle.isSameId(vehicle1, vehicle3); // -> false