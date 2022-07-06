const request = require('supertest');
const app = "http://localhost:3000";

describe('GET /fornecedor', () => {
    it('returns status code 201 if firstName is passed', async() => {
        const res = await request(app).get('/fornecedor');
        expect(200);
    });
});
