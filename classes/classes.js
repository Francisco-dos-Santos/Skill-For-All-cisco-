console.log("testando");
class Vieble{
  constructor({id,latitude, longitude}){
    this.id=id;
    this.time=Date.now();
    this.setPostion({latitude,longitude});
  };
  getPostion=function({latitude,longitude}){
    this.time=Date.now();
    this.latitude=latitude;
    this.longitude=longitude
  };
  setPostion=function({latitude,longitude}){
    return{
      latitude:this.latitude,
      longitude:this.longitude
    }
  }
}

let vieble1=new Vieble(id="LA045",latitude=19.43232,longitude=56.89975);
console.log(vieble1.setPostion())