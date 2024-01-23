
const Vihicle = class{
  status="unavailable";
  #latitude;
  #longitude;
  constructor({id,latitude, longitude}){
    this.id=id;
    this.setPostion({latitude,longitude});
  }; 
  // declarando property and metods private 
  setPostion=function({latitude,longitude}){
    this.time=Date.now();
    this.#latitude =latitude;
    this.#longitude =longitude;
  };
  getPostion=function(){
    return{
      latitude: this.#latitude,
      longitude: this.#longitude
    }
  };
};
console.log("testando");
// instancing object
// used property private 
let vihicle1= new Vihicle( {id: "LA045", latitude: 19.43232, longitude: 56.89975});
console.log(vihicle1.getPostion());
