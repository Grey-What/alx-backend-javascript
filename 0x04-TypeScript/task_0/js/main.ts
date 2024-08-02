interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 21,
  location: 'Paris',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

studentsList.forEach((student) => {
  //create row and cells
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');
  //add data to cells
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
  //append cells to row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  //append row to table
  table.appendChild(row);
});
