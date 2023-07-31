const fs = require('fs');

try {
  // Write content to data.txt
  fs.writeFileSync('data.txt', 'First content\n');
  console.log('First content is written to data.txt');

  // Append a second content to data.txt
  fs.appendFileSync('data.txt', 'Second content\n');
  console.log('Second content is appended to data.txt');

  // Append new content to data.txt
  fs.appendFileSync('data.txt', 'New content\n');
  console.log('New content is appended to data.txt');

  // Read data.txt to check its content
  const data = fs.readFileSync('data.txt', 'utf8');
  console.log('Current content of data.txt:');
  console.log(data);
} catch (err) {
  console.error('Error:', err.message);
}
