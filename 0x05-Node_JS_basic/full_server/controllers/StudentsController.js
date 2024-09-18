/**
 * StudentsController - The main controller for students
 */

import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(req.databaseFile)
      .then((output) => {
        const csStudentsCount = output.csStudents.length;
        const sweStudentsCount = output.sweStudents.length;
        res.status(200)
          .send(['This is the list of our students',
            `Number of students in CS: ${csStudentsCount}. List: ${output.csStudents.join(', ')}`,
            `Number of students in SWE: ${sweStudentsCount}. List: ${output.sweStudents.join(', ')}`]
            .join('\n'));
      }).catch(() => {
        res.status(500).send('Cannot load the database');
      })
  }

  static getAllStudentsBymajor(req, res) {
    if (req.params.major !== 'CS' && req.params.major !== 'SWE') {
      return res.status(500).send('Major must be CS or SWE');
    }

    readDatabase(req.databaseFile)
      .then((output) => {
        if (req.params.major === 'CS') {
          res.status(200).send('List: ' + output.csStudents.join(', '));
        } else if (req.params.major === 'SWE') {
          res.status(200).send('List: ' + output.sweStudents.join(', '));
        }
      }).catch(() => {
        res.status(500).send('Cannot load the database');
      })
  }
}

export default StudentsController;
