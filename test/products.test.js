
process.env.MYSQL_USER = "root";
process.env.MYSQL_PASSWORD = "root";
process.env.MYSQL_DATABASE = "curso_node";
process.env.MYSQL_HOST = "localhost";
process.env.MYSQL_PORT = 3306;
process.env.JWT_KEY = "segredo";
process.env.URL_API = "http://localhost:3000/";

const request = require('supertest');
const app = require('../app');

describe(`Sample Test`, () => {

    it(`Get product list`, async (done) => {
        const res = await request(app).get('/products');
        expect(res.body);
        done();
     })
 })
