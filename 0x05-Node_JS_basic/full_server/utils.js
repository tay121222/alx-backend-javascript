import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(err);
    } else {
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

      resolve(studentGroups);
    }
  });
});

export default readDatabase;
