// test/app.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Adjust the path if needed

chai.use(chaiHttp);
const { expect } = chai;

describe('GET /', () => {
    it('should return Hello, World!', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                if (err) return done(err); // Handle error if it occurs
                expect(res).to.have.status(200);
                expect(res.text).to.equal('Hello, World!');
                done();
            });
    });
});
