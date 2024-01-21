let point={
    x:0,
    y:0,
    moverHorizotally:function (distance){
        this.x=this.x+distance;
        console.log("that is value the distance: "+ this.x);
    },
    moverVertically:(distance)=>{
        this.y=this.y + distance;
    }
}
console.log(point.x);
// call method
point.moverHorizotally(30);
console.log(point.x);

let contact={
    tel:"932925647",
    email:"franciscodosstn@gamil.com"
}
console.log(contact);
// add objects
contact.email={
    work_1:"francisco@gamil.com",
    work_2:"franciscodoswork@gmail.com"
}
// after to add
console.log(contact);
// percorrendo objects with keys computers
for(i=0; i<2; i++){
    let keys=Object.keys(contact.email);
    console.log(`${keys[i]}: ${contact.email[keys[i]]}`);
}
if(contact.notes){
    console.log(contact.notes="something really important");
}else{
    console.log("não existe property com name notes");
}