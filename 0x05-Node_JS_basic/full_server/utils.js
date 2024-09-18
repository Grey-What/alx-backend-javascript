/**
 * readDatabase - Read the content of a CSV file asynchronously
 */
import fs from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n').slice(1);

        const studentData = {
          csStudents: [],
          sweStudents: [],
        };

        for (let i = 0; i < lines.length; i += 1) {
          const line = lines[i].trim();
          if (lines[i] === '') {
            continue;
          }
          const student = lines[i].split(',');

          if (student[3] === 'CS') {
            studentData.csStudents.push(student[0]);
          } else if (student[3] === 'SWE') {
            studentData.sweStudents.push(student[0]);
          }
        }
        resolve(studentData);
      }
    });
  });
}

export default readDatabase;
