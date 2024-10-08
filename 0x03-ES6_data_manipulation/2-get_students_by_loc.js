/**
 * getStudentsByLocation
 * returns an array of filtered objects
 *
 */
export default function getStudentsByLocation(listStudents, city) {
  return listStudents.filter((student) => student.location === city);
}
