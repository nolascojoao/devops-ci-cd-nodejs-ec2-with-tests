const request = require('supertest');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Cheers! God bless you more in 2025!");
});

describe('GET /', () => {
  it('should return 200 and the correct message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe("Cheers! God bless you more in 2025!");
  });
});
