/**
 * more complex HTTP server with different routes
 */
const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
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

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');

    countStudents(process.argv[2].toString())
      .then((output) => {
        res.end(output);
      })
      .catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  }
});

app.listen(1245);

module.exports = app;
