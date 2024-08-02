// task 1
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}
//task 2
interface Directors extends Teacher {
  numberOfReports: number;
}
// task 3
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
   return firstName.charAt(0) + `. ${lastName}`;
}

//task 4
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  firstName: string;
  lastName: string;
  workOnHomework: () => string;
  displayName: () => string;
}

class StudentClass implements StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework = () => {
    return 'Currently working';
  }

  displayName = () => {
    return this.firstName
  }
}

function createStudent(constructor: StudentClassConstructor, firstName: string, lastName: string): StudentClass {
  return new constructor(firstName, lastName);
}
