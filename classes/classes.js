
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


// used getters and setters

const People = class{
  constructor({id,name,idade}){
    this.id=id;
    this.datas={name,idade};
    this.status="offline";
  };
  set datas({name,idade}){
    this.time=Date.now();
    this.name=name;
    this.idade=idade;
  };
  get datas(){
    return {
      name:this.name,
      idade:this.idade
    };
  };
}

const people=new People({id:"LA50",name:"Francisco",idade:22});
let values=Array(0);
values.push(new People({id:"LA50",name:"Francisco",idade:25}))
values.push(new People({id:"LA23",name:"Francisco",idade:23}))
// editando 
values[0].datas={idade:30,name:"Francisco"};
console.log(values);