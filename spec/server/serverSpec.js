'use strict';
var request = require('request');
const BASE_URL = 'http://localhost:3000/';

describe('Roman Number Parser Server', function () {
    describe('GET/', function () {
        it('returns healthcheck status OK', function (done) {
            // given
            var healthcheckEndpoint = BASE_URL + 'healthcheck';

            // when
            request.get(healthcheckEndpoint, function (error, response, body) {
                var payload = JSON.parse(body);

                // then
                expect(response.statusCode).toBe(200);
                expect(payload.status).toBe('OK');
                done();
            });
        });

        it('returns the roman number for 9744', function (done) {
            // given
            var arabicNumber = 9744;
            var endpoint = BASE_URL + 'number/' + arabicNumber;

            // when
            request.get(endpoint, function (error, response, body) {
                // then
                expect(body).toBe('M̅XDCCXLIV');
                done();
            });
        });

        it('returns 404 when an invalid parameter is passed', function (done) {
            var invalidParameter = '123invalid-parameter';
            var endpoint = BASE_URL + 'number/' + invalidParameter;
            // when
            request.get(endpoint, function (error, response, body) {
                // then
                expect(response.statusCode).toBe(404);
                done();
            });
        });

        it('returns 400 when the number passed is not in the range 0-10000', function (done) {
            var invalidNumber = '10001';
            var endpoint = BASE_URL + 'number/' + invalidNumber;
            // when
            request.get(endpoint, function (error, response, body) {
                // then
                expect(response.statusCode).toBe(400);
                done();
            });
        });

        it('returns 404', function (done) {
            // when
            request.get(BASE_URL, function (error, response, body) {
                // then
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });
});
