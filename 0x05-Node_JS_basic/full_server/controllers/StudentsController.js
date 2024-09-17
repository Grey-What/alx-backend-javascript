/**
 * StudentsController - The main controller for students
 */

import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase('database.csv')
      .then((output) => {
        res.status(200)
          .send(['This is the list of our students', output].join('\n'));
      }).catch(() => {
        res.status(500).send('Cannot load the database');
      })
  }

  static getAllStudentsBymajor(req, res) {
    readDatabase('database.csv')
      .then((output) => {
        outputLines = output.split('\n');
        if (req.params.major !== 'CS' && req.params.major !== 'SWE') {
          res.status(500)
            .send('Major must be CS or SWE');
        } else {
          if (req.params.major === 'CS') {
            csStudents = outputLines[1].split('. ')[2];
            res.status(200).send(csStudents);
          } else if (req.params.major === 'SWE') {
            sweStudents = outputLines[2].split('. ')[2];
            res.status(200).send(sweStudents);
          }
        }
      }).catch(() => {
        res.status(500).send('Cannot load the database');
      })
  }
}

export default StudentsController;
