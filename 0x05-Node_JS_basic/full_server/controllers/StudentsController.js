import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const databaseFilename = process.argv[2];
      const studentGroups = await readDatabase(databaseFilename);
      let response = 'This is the list of our students\n';

      for (const [field, students] of Object.entries(studentGroups)) {
        const studentNames = students.map((student) => student.firstname).join(', ');
        response += `Number of students in ${field}: ${students.length}. List: ${studentNames}\n`;
      }

      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const databaseFilename = process.argv[2];
      const studentGroups = await readDatabase(databaseFilename);
      const students = studentGroups[major] || [];
      const studentNames = students.map((student) => student.firstname).join(', ');

      res.status(200).send(`List: ${studentNames}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
    return 1;
  }
}
