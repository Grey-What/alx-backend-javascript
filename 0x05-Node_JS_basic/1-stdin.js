const isInteractive = process.stdin.isTTY;

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (name) => {
  process.stdout.write(`Your name is: ${name.toString().trim()}`);

  if (isInteractive) {
    process.stdin.pause();
  }
});

process.stdin.on('end', () => {
  if (!isInteractive) {
    process.stdout.write('This important software is now closing\n');
  }
});
