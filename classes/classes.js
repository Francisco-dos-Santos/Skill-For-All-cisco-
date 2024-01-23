
 const Vihicle = class{
  constructor({id,latitude, longitude}){
    this.id=id;
    this.setPostion({latitude,longitude});
  };  
  getPostion=function(){
    return{
      latitude:this.latitude,
      longitude:this.longitude
    }
  };
  setPostion=function({latitude,longitude}){
    this.time=Date.now();
    this.latitude=latitude;
    this.longitude=longitude;
  };
};
console.log("testando");
// instancing object
let vihicle1= new Vihicle( {id: "LA045", latitude: 19.43232, longitude: 56.89975});
vihicle1.setPostion({longitude: 59.456, latitude:40.6754});
console.log(vihicle1);

/* 
  instances to objects
  for describle the exits the instance the objects using following:
  #nameObj instanceof class -> when if khow a class especify is operator binario (return true/false)
  #nameObject.Constructor.name-> useing for khow if o object from that instance the class
*/
console.log(vihicle1.constructor.name);
console.log( vihicle1 instanceof Vihicle);   
