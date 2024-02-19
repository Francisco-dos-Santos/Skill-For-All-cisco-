// CHALLEGUE#1
function sendEmail(from, to, message) {}

class User {
  constructor({ name, surname, email, role }) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.role = role;
    this.courses = [];
    this.messages = [];
  }
  addCourse(course, level) {
    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i].course === course) {
        return;
      }
    }
    this.courses.push({ course, level });
  }
  removeCourse(course) {
    let courses = this.courses.filter((el) => el.course !== course);
    if (courses) {
      this.courses = courses;
    }
  }
  editCourse(course, level) {
    for (let el of this.courses) {
      if (el.course === course) {
        el.level = level;
        break;
      }
    }
  }
  sendMessage(from, message) {
    this.messages.push({ from: from.email, to: this.email, content: message });
    sendEmail(from.email, this.email, message);
  }
  showMessagesHistory() {
    if (this.messages.length !== 0) {
      for (const mess of this.messages) {
        console.log(`${mess.from}-> ${mess.to}: ${mess.content}`);
      }
    }
  }
}

// let student1 = new User({
//   name: "francisco",
//   surName: "Santos",
//   email: "franciscodos@gmail.com",
//   role: "estudante",
// });
// let student2 = new User({
//   name: "Kelly",
//   surName: "Estes",
//   email: "k_estes@dayrep.com",
//   role: "student",
// });
// let teacher1 = new User({
//   name: "Paula",
//   surName: "Thompkins",
//   email: "PaulaThompkins@jourrapide.com",
//   role: "teacher",
// });

// student1.addCourse("maths", 2);
// student1.addCourse("physics", 1);
// student1.removeCourse("physics");
// teacher1.addCourse("biology", 3);
// teacher1.editCourse("biology", 4);
// console.log(student1);
// console.log(teacher1)

// console.log(`${student1.name}: ${student1.courses.length} courses`);
// console.log(`${teacher1.name}: ${teacher1.courses.length} courses`);
// teacher1.sendMessage(student1, "ola prof");
// teacher1.sendMessage(student1, "como estas prof");
// student1.sendMessage(teacher1,"ola obrigado")
// student1.sendMessage(teacher1,"estou and you")
// teacher1.showMessagesHistory();
// student1.showMessagesHistory();
// -> franciscodos@gmail.com -> PaulaThompkins@jourrapide.com: ola prof
// -> franciscodos@gmail.com -> PaulaThompkins@jourrapide.com: como estas prof

// CHALLEGUE#2
class ExtendedUser extends User {
  constructor({ name, surname, email, role }) {
    super({ name, surname, email, role });
  }
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
  set fullName(fullName) {
    let names = fullName.split(" ");
    const [first, ...rest] = names;
    if (first && rest) {
      this.name = first;
      this.surname = rest.join(" ");
    }
  }

  static match(teacher, student, course) {
    let matched = [];
    for (let scourse of student.courses) {
      for (let tcourse of teacher.courses) {
        if (
          scourse.course === tcourse.course &&
          scourse.level <= tcourse.level
        ) {
          matched.push(scourse);
        }
      }
    }
    if (course) {
      for (let mcourse of matched) {
        if (mcourse.course === course) {
          return mcourse;
        }
      }
    } else {
      console.warn(
        "o professor não ensina os cursos que o estudante está interessado"
      );
      return matched;
    }
  }
}

class Teacher extends ExtendedUser {
  constructor({ name, surname, email }) {
    super({ name, surname, email, role: "teacher" });
  }
}

class Student extends ExtendedUser {
  constructor({ name, surname, email }) {
    super({ name, surname, email, role: "student" });
  }
}

let student1 = new Student({
  name: "Francisco",
  surname: "dosSantos",
  email: "fraciscodossantos.com",
});
let student2 = new Student({
  name: "Kelly",
  surname: "Estes",
  email: "k_estes@dayrep.com",
});
let teacher1 = new Teacher({
  name: "Paula",
  surname: "Thompkins",
  email: "PaulaThompkins@jourrapide.com",
});

student1.addCourse("maths", 2);
student1.addCourse("physics", 4);
teacher1.addCourse("maths", 4);
let match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> [{course: 'maths', level: 2}]
teacher1.editCourse("maths", 1);
match = ExtendedUser.match(teacher1, student1);
console.log(match); // -> []
teacher1.addCourse("physics", 4);
match = ExtendedUser.match(teacher1, student1, "physics");
console.log(match); // -> {course: 'physics', level: 4}
student1.fullName="Francisco Dos Santos";
console.log(student1.fullName)
