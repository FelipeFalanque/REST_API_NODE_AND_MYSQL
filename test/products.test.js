
const request = require('supertest');
const app = require('../app');


describe('Sample Test', () => {



    it('Get product list', async () => {
        const res = await request(app).get('/products');

        console.log(res.body);

        expect(res.body);

    });

});