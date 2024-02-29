process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    const input = chunk.toString().trim();
    if (input !== '') {
      process.stdout.write(`Your name is: ${input}\n`);
    }
  }
});

process.stdin.on('end', () => console.log('This important software is now closing'));
