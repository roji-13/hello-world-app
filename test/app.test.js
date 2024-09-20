const request = require('supertest'); // Use supertest with Jest
const app = require('../app'); // Assuming your Express app is in app.js

describe('GET /', () => {
  it('should return Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World');
  });
});
