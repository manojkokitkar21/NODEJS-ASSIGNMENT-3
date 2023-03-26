const http = require('http');
const fs = require('fs');

// Create the index.html file with the given content
const fileContent = '<h1>Hello World</h1>\n<p>This is {Your Name eg.Manoj}...</p>';
fs.writeFile('index.html', fileContent, (err) => {
  if (err) throw err;
  //console.log('index.html created successfully!');
});

// Create a simple HTTP server to serve the index.html file
const server = http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write('File not found!');
      return res.end();
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
});

// Start the server and listen on port 3000
server.listen(5000, () => {
  console.log('Server is listening on port 5000....');
});
