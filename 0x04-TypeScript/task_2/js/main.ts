interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// type guard 
function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Teacher | Director): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

function teachClass(todayClass: "Math" | "History"):void {
    if (todayClass === "Math")
        console.log(`Teaching ${todayClass}`);
    else
        console.log(`Teaching ${todayClass}`);
}

console.log(createEmployee(200));   
console.log(createEmployee(1000));   
console.log(createEmployee('500MAD')); 
console.log(isDirector(createEmployee('400MAD')));
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
teachClass('Math');
teachClass('History');