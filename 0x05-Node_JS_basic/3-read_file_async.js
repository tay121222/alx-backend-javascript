const fs = require('fs').promises;

const countStudents = async (dataPath) => {
  try {
    const data = await fs.readFile(dataPath, 'utf8');
    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');

    const studentGroups = {};
    const fieldNames = lines[0].split(',').map((name) => name.trim());

    for (let i = 1; i < lines.length; i += 1) {
      const fields = lines[i].split(',');
      const field = fields.pop().trim();
      const student = {};
      fields.forEach((value, index) => {
        student[fieldNames[index]] = value.trim();
      });

      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      studentGroups[field].push(student);
    }

    console.log(`Number of students: ${lines.length - 1}`);

    for (const [field, students] of Object.entries(studentGroups)) {
      const studentNames = students.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${students.length}. List: ${studentNames}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
