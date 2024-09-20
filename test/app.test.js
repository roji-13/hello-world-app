// test/app.test.js
const chaiHttp = require('chai-http');

(async () => {
    const chai = await import('chai');
    const app = await import('../app.js'); // Ensure correct path with .js extension

    chai.use(chaiHttp);
    const { expect } = chai;

    describe('GET /', () => {
        it('should return Hello, World!', (done) => {
            chai.request(app.default) // Use app.default to access the exported app
                .get('/')
                .end((err, res) => {
                    if (err) return done(err);
                    expect(res).to.have.status(200);
                    expect(res.text).to.equal('Hello, World!');
                    done();
                });
        });
    });
})();
