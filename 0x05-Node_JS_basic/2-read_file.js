const fs = require('fs');

const countStudents = (dataPath) => {
  try {
    if (!fs.existsSync(dataPath)) {
      throw new Error('Cannot load the database');
    }

    const fileContent = fs.readFileSync(dataPath, 'utf-8').trim();
    if (fileContent === '') {
      throw new Error('Cannot load the database');
    }

    const lines = fileContent.split('\n').filter((line) => line.trim() !== '');

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
    console.error(`Error: ${error.message}`);
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
