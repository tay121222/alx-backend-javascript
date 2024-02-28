const http = require('http');
const fs = require('fs').promises;

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const dataPath = 'database.csv';
      const data = await fs.readFile(dataPath, 'utf8');
      const lines = data.trim().split('\n').filter((line) => line.trim() !== '');

      const studentGroups = {};
      const fieldNames = lines[0].split(',').map((name) => name.trim());
      let response = 'This is the list of our students\n';
      response += `Number of students: ${lines.length - 1}\n`;

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

      for (const [field, students] of Object.entries(studentGroups)) {
        const studentNames = students.map((student) => student.firstname).join(', ');
        response += `Number of students in ${field}: ${students.length}. List: ${studentNames}\n`;
      }
      response = response.trim();
      res.end(response);
    } catch (error) {
      res.end('Cannot load the database');
    }
  } else {
    res.end('Invalid URL path');
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

module.exports = app;
