/**
 * Express.js HTTP Server
 * 
 * This server provides two endpoints:
 * - GET / : Returns "Hello, World!\n" (original functionality)
 * - GET /evening : Returns "Good evening" (new endpoint)
 * 
 * Server Configuration:
 * - Host: 127.0.0.1
 * - Port: 3000
 */

const express = require('express');

// Create Express application instance
const app = express();

// Server configuration - preserved from original implementation
const hostname = '127.0.0.1';
const port = 3000;

/**
 * GET / - Root endpoint
 * Returns the original "Hello, World!" greeting with trailing newline
 * Content-Type: text/plain (automatically set by Express for string responses)
 * Status: 200 OK
 */
app.get('/', (req, res) => {
  res.send('Hello, World!\n');
});

/**
 * GET /evening - Evening greeting endpoint
 * Returns "Good evening" response
 * Content-Type: text/plain (automatically set by Express for string responses)
 * Status: 200 OK
 */
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

// Start the server and listen on configured host and port
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
