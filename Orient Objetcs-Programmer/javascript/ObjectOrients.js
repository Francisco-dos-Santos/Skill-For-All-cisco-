// challenge 1
let images=[
  {
    title:"Manalisa",
    artist:"Leonardo da Vinci",
    data:1503
  },
  {
    title:"Á ultima ceia",
    artist:"Leonardo da Vinci",
    data:1493
  },
  {
    title:"Noite estralada",
    artist:"Vincent Vangagohn",
    data:1889
  },
  {
    title:"O grito",
    artist:"Edvar Munch",
    data:1893
  },
  {
    title:"Guernica",
    artist:"Pablo Picasso",
    data:1937
  },
  {
    title:"Merina com Brinco",
    artist:"Johannes Vermeer",
    data:1665
  },
  {
    title:"O nascimento de Venus",
    artist:"Sandro Botticelli",
    data:1485
  },
  {
    title:"A criação de adão",
    artist:"Michelangelo",
    data:1512
  },
  {
    title:"Las Meninas",
    artist:"Diego velaquez",
    data:1656
  },
];

// challenge 2
let Image=function(title,artist,data){
  this.title=title,
  this.artist=artist,
  this.data=data
};

// create the factory
let getImages=function(title,artist,data){
  return{
    title,
    artist,
    data
  };
}

let obj=getImages("francisco","O amor da vida",2001);
console.log(obj)
let images1=new Array();
let images2=new Array();

images.forEach(image=>{
  images1.push(new Image(image.title,image.artist,image.data));
});

images1.forEach(image=>{
  images2.push(getImages(image.title,image.artist,image.data));
})
console.table(images);

images2.forEach(image=>{
  console.log(`${image.title},${image.artist},${image.data}`);
})

// challenge 3
let Images = {
  list: [],
  contains: function(title) {
      let retVal = false;
      for(image of this.list) {
          if(image.title === title) {
              retVal = true;
              break;
          }
      }
      return retVal;
  },
  add: function(title, artist, date) {
      if(!this.contains(title)) {
          this.list.push(new Image(title, artist, date));
      }
  },
  show:function(){
    for(image of this.list){
      console.log(`${image.title},${image.artist},${image.data}`);
    }
  },
  clear:function(){
    for(image of this.list){
      if(typeof image==="object"){
        image.remove();
      }
    }
  }
}
  // challenge 4
  Image.prototype.show = function() {
    console.log(`${this.title} (${this.artist}, ${this.date})`);
}

Images.show = function() {
for(image of this.list) {
        image.Image.show();
    }
}

Images.edit = function(title, artist, date) {
for(image of this.list) {
        if(image.title === title) {
            image.artist = artist;
            image.date = date;
            break;
        }
    }
}

Images.delete = function(title) {
    for(let i=0; i < this.list.length; i++) {
        if(this.list[i].title === title) {
            this.list.splice(i,1);
            break;
        }
    }
}

// challenge 5
let deepComp = function(src, trg) {
  let retVal = Object.keys(src).length === Object.keys(trg).length;
  if(retVal) {
      for(property in src) {
          if(typeof(src[property]) === typeof(trg[property])) { 
              retVal = typeof(src[property]) === 'object' ? deepComp(src[property], trg[property]) : src[property] === trg[property]
          } else {
              retVal =false;
          }
          if(!retVal) break;
      }
  }
  return retVal;
}

