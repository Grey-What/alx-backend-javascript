/**
 * readDatabase - Read the content of a CSV file asynchronously
 */

import countStudents from "../3-read_file_async";

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.split('\n');

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
        const result = [
          `Number of students: ${lines.length - 2}`,
          `Number of students in CS: ${csCount}. List: ${csStudents.join(', ')}`,
          `Number of students in SWE: ${sweCount}. List: ${sweStudents.join(', ')}`,
        ].join('\n');
        resolve(result);
      }
    });
  });
}

export default readDatabase;
