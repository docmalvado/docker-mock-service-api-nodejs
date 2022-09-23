'use strict';

const express = require('express');

// Constants
const HOST = '0.0.0.0';
const PORT = 8080;
const BASE_PATH= '/nodejs';
const API_VERSION = '1.0.0';

// App
const app = express();

// Health check endpoint
app.get('/health', async (req, res) => {
  res.type('json');
  res.send(JSON.stringify({
    "api": API_VERSION,
    "output": "Health OK!"
  }));
});

// Business APIs
// GET
app.get(BASE_PATH+'/mock', async (req, res) => {
  res.type('json');
  res.send(JSON.stringify({
    "api": API_VERSION,
    "output": "GET Success!"
  }));
});

// POST
app.post(BASE_PATH+'/mock', (req, res) => {
  let response = {
    "api": API_VERSION,
    "input": req.body,
    "output": "POST Success!"
  }
  console.info(response);
  res.type('json');
  res.send(JSON.stringify(response));
})

// PUT
app.put(BASE_PATH+'/mock', (req, res) => {
  let response = {
    "api": API_VERSION,
    "input": req.body,
    "output": "PUT Success!"
  }
  console.info(response);
  res.type('json');
  res.send(JSON.stringify(response));
})

// PATCH
app.patch(BASE_PATH+'/mock', (req, res) => {
  let response = {
    "api": API_VERSION,
    "input": req.body,
    "output": "PATCH Success!"
  }
  console.info(response);
  res.type('json');
  res.send(JSON.stringify(response));
})

// DELETE
app.delete(BASE_PATH+'/mock', (req, res) => {
  let response = {
    "api": API_VERSION,
    "input": req.body,
    "output": "DELETE Success!"
  }
  console.info(response);
  res.type('json');
  res.send(JSON.stringify(response));
})

// Launch
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);