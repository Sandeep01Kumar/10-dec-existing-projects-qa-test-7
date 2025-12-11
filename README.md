# hao-backprop-test

test project for backprop integration. Do not touch!

## Description

A simple Node.js HTTP server built with the **Express.js** framework. This project demonstrates basic Express.js routing with multiple endpoints.

## Available Endpoints

| Endpoint | Method | Response |
|----------|--------|----------|
| `/` | GET | `Hello, World!\n` |
| `/evening` | GET | `Good evening` |

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm (Node Package Manager)

### Installation

Install the required dependencies:

```bash
npm install
```

### Running the Server

Start the server with:

```bash
node server.js
```

The server will start and be available at:

```
http://127.0.0.1:3000/
```

### Testing the Endpoints

Once the server is running, you can test the endpoints:

```bash
# Test the Hello World endpoint
curl http://127.0.0.1:3000/

# Test the Good Evening endpoint
curl http://127.0.0.1:3000/evening
```

## Server Configuration

- **Host:** `127.0.0.1`
- **Port:** `3000`
