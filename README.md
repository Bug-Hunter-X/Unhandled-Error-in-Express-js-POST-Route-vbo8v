# Unhandled Error in Express.js POST Route

This repository demonstrates a common error in Express.js applications: the lack of proper error handling in request processing, specifically within a POST route that expects JSON data.

## The Bug

The `bug.js` file contains an Express.js server with a POST route that logs incoming JSON data.  However, it lacks crucial error handling. If a client sends malformed or invalid JSON, the server will crash or produce unexpected results.

## The Solution

The `bugSolution.js` file provides a corrected version that includes comprehensive error handling.  It uses `try...catch` blocks to gracefully handle JSON parsing errors and other potential issues, returning appropriate error responses to the client instead of crashing.

## How to Reproduce

1. Clone the repository.
2. Navigate to the directory.
3. Run `npm install` to install Express.js.
4. Run `node bug.js` to start the buggy server.
5. Send a POST request to `http://localhost:3000/data` with invalid JSON (e.g., missing a closing bracket) using a tool like Postman or curl. Observe the server's behavior.
6. Repeat steps 4 and 5 with `node bugSolution.js` to observe the improved error handling.