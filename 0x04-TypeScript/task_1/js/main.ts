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
