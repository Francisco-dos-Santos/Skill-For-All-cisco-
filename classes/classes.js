
class Vihicle{
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
let vihicle1= new Vihicle( {id: "LA045", latitude: 19.43232, longitude: 56.89975});
vihicle1.setPostion({longitude: 59.456, latitude:40.6754});
console.log(vihicle1.getPostion())