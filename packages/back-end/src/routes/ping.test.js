const request = require('supertest');
const app = require('../app');

describe('Ping', () => {
    it('should return Pong!', async done => {
        const res = await request(app).get('/ping');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('Pong!');
        done();
    });
});
