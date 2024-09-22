const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('should return Hello World', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello, World!');
    });
});

describe('GET /profile', () => {
    it('should return the profile page with correct content', async () => {
        const response = await request(app).get('/profile');
        expect(response.text).toContain('My Profile');
        expect(response.text).toContain('Name: Roji');
        expect(response.text).toContain('About me: I am a second-year student studying Software Engineering at Deakin University.');
        expect(response.text).toContain('Email: <a href="mailto:roji.13804@gmail.com">roji.13804@gmail.com</a>');
        expect(response.text).toContain('I enjoy crocheting in my free time.');
    });
});
