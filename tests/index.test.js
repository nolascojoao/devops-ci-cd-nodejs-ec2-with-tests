const request = require('supertest');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Deploy test successful! The app is running smoothly.");
});

describe('GET /', () => {
  it('should return 200 and the correct message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe("Deploy test successful! The app is running smoothly.");
  });
});
