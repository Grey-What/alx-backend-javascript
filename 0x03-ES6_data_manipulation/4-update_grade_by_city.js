/**
 * updateStudentGradeByCity
 * return array of student from specific city and update grade
 */
export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  return studentsList.filter((element) => element.location === city)
    .map((student) => {
      newGrades.map((studentGrade) => {
        if (studentGrade.studentId === student.id) {
          student.grade = studentGrade.grade;
        }

        if (!student.hasOwnProperty('grade')) {
          student.grade = 'N/A';
        }
        return student;
      });
      return student;
    });
}
