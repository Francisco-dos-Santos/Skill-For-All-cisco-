function sendEmail(from, to, message){}

class User {
  constructor({ name, surName, email, role }) {
    this.name = name;
    this.surName = surName;
    this.email = email;
    this.role = role;
    this.courses = [];
    this.messages = [];
  };
  addCourse(course, nevel) {
    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i].course === course){
        return;
      }
    }
    this.courses.push({ course, nevel });
  };
  removeCourse(course) {
    let courses = this.courses.filter((el) => el.course !== course);
    if (courses) {
      this.courses = courses;
    }
  };
  editCourse(course, nevel) {
    for (let el of this.courses) {
      if (el.course == course) {
        this.nevel = nevel;
        break;
      }
    }
  };
  sendMessage(from, message) {
    this.messages.push({from:from.email,to:this.email,content:message});
    sendEmail(from.email,this.email,message)
  };
  
  showMessagesHistory() {
    if (this.messages.length !== 0) {
      for (const mess of this.messages) {
        console.log(`${mess.from}-> ${mess.to}: ${mess.content}`);
      }
    }
  };
};

let student1 = new User({
  name: "francisco",
  surName: "Santos",
  email: "franciscodos@gmail.com",
  role: "estudante",
});
let student2 = new User({
  name: "Kelly",
  surName: "Estes",
  email: "k_estes@dayrep.com",
  role: "student",
});
let teacher1 = new User({
  name: "Paula",
  surName: "Thompkins",
  email: "PaulaThompkins@jourrapide.com",
  role: "teacher",
});

student1.addCourse("maths", 2);
student1.addCourse("physics", 1);
student1.removeCourse("physics");
teacher1.addCourse("biology", 3);
teacher1.editCourse("biology", 4);
console.log(student1);
console.log(teacher1)

console.log(`${student1.name}: ${student1.courses.length} courses`);
console.log(`${teacher1.name}: ${teacher1.courses.length} courses`);
teacher1.sendMessage(student1, "ola prof");
teacher1.sendMessage(student1, "como estas prof");
student1.sendMessage(teacher1,"ola obrigado")
student1.sendMessage(teacher1,"estou and you")
teacher1.showMessagesHistory();
student1.showMessagesHistory();
// -> franciscodos@gmail.com -> PaulaThompkins@jourrapide.com: test message
// -> franciscodos@gmail.com -> PaulaThompkins@jourrapide.com: another message
