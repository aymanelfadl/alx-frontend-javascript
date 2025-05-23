interface Student {
    firstName: string;
    lastNmae: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Ayman',
    lastNmae: 'Elfadl',
    age: 22,
    location: 'morocco'
}

const student2: Student = {
    firstName: 'Nora',
    lastNmae: 'Elfadl',
    age: 30,
    location: 'morocco'
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const headerRow = table.insertRow();
headerRow.innerHTML = "<th>First Name</th><th>Location</th>";

studentsList.forEach((student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);

