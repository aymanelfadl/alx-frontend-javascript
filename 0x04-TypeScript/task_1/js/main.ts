interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [attribute: string]: any;
}

const teacher1: Teacher = {
  firstName: "Ayman",
  lastName: "Elfadl",
  fullTimeEmployee: true,
  location: "Casablanca",
  contract: false,
};

console.log(teacher1);
