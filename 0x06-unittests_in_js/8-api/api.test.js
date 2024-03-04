const request = require('request');
const { expect } = require('chai');

describe('Basic Integration testing', () => {
  it('Correct status code?', (done) => {
    request.get('http://localhost:7865', (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
    });
  });

  it('Correct result?', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
        expect(body).to.equal('Welcome to the payment system');
        done();
    });
  });

});
