const request = require('supertest');
const mockAxios = require('axios');
const app = require('../app');
const config = require('../utils/config');

describe('Subscribe', () => {
    it('should return success for valid inputs!', async done => {
        const reqBody = {
            firstName: 'firstName',
            lastName: ' lastName ',
            email: ' email ',
            mobilePhone: ' 9898989898 '
        };
        mockAxios.post.mockImplementationOnce(() =>
            Promise.resolve({
                data: {
                    data: reqBody,
                    state: 'submitted'
                },
                statusCode: 200
            })
        );

        const res = await request(app)
            .post('/subscribe')
            .send(reqBody)
            .set(config.X_AUTH_TOKEN_HEADER, config.X_AUTH_TOKEN);
        expect(mockAxios.post).toHaveBeenCalledTimes(1);
        expect(res.statusCode).toEqual(200);
        expect(res.body.data).toEqual(reqBody);
        expect(res.body.state).toEqual('submitted');
        done();
    });
});
