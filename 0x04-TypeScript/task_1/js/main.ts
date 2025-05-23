interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [attribute: string]: any;
}

interface Directors extends Teacher{ 
    numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
 
    constructor (public firstName:string, public lastName:string){}
 
    workOnHomework(): string {
        return "Curently working ..."
    }
 
    displayName(): string {
        return this.firstName;
    }
}

const printTeacher: printTeacherFunction = function(firstName, lastName) {
  return firstName.charAt(0) + ". " + lastName;
};

const teacher1: Teacher = {
  firstName: "Ayman",
  lastName: "Elfadl",
  fullTimeEmployee: true,
  location: "Casablanca",
  contract: false,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(teacher1);

console.log(director1);

console.log(printTeacher("Ayman", "Elfadl"));

const student = new StudentClass("Ayman", "Elfadl");

console.log(student);

console.log(student.displayName());
console.log(student.workOnHomework());

