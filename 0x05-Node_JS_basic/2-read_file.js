/**
 * Count the number of students in each course
 *
 * @param {string} path - The path to the CSV file
 */
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n');

    console.log(`Number of students: ${lines.length - 2}`);

    const csStudents = [];
    const sweStudents = [];
    let csCount = 0;
    let sweCount = 0;

    for (let i = 1; i < lines.length; i += 1) {
      if (lines[i] === '') {
        break;
      }
      const student = lines[i].split(',');

      if (student[3] === 'CS') {
        csStudents.push(student[0]);
        csCount += 1;
      } else if (student[3] === 'SWE') {
        sweStudents.push(student[0]);
        sweCount += 1;
      }
    }
    console.log(`Number of students in CS: ${csCount}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweCount}. List: ${sweStudents.join(', ')}`);
  } catch (err) {
    console.error(err);
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
