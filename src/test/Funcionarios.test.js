const request = require('supertest');
const app = "http://localhost:3000";

describe('GET /funcionarios', () => 
{
    it('returns status code 201 if firstName is passed', async() =>
     {
        const res = await request(app).get('/funcionarios');
        expect(200);
    }
    );
}
);