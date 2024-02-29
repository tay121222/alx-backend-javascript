const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const dataPath = process.argv[2];
      await countStudents(dataPath);
      res.end();
    } catch (error) {
      console.error('Error loading database:', error.message);
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
