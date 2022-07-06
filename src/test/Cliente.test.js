const request = require('supertest');
const app = "http://localhost:3000";

describe('GET /cliente', () => {
    it('returns status code 201 if firsName is passed', async () =>
     {
        const res = await request(app).get('/cliente');
        expect(200);
    });
});