const request = require('request');
const { expect } = require('chai');

describe('basic Integration testing', () => {
  it('correct status code?', () => new Promise((done) => {
    request.get('http://localhost:7865', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  }));

  it('correct result?', () => new Promise((done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));

  it('correct status code when :id is a number?', () => new Promise((done) => {
    request.get('http://localhost:7865/cart/12', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  }));

  it('correct status code when :id is NOT a number (=> 404)?', () => new Promise((done) => {
    request.get('http://localhost:7865/cart/hello', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  }));

  it('returns the correct object', () => new Promise((done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      expect(JSON.parse(body)).to.deep.equal(expectedResponse);
      done();
    });
  }));

  it('returns the correct welcome message', () => new Promise((done) => {
    const options = {
      url: 'http://localhost:7865/login',
      json: true,
      body: { userName: 'Betty' },
    };

    request.post(options, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  }));
});
