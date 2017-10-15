'use strict';
describe('RomanNumberParser', function () {
    var subject = require('../../app/lib/RomanNumberParser');

    describe('parse', function () {
        var testCases = [
            {
                arabicNumber: 10000,
                result: '̅X'
            },
            {
                arabicNumber: 8000,
                result: '̅VMMM'
            },
            {
                arabicNumber: 9014,
                result: 'M̅XXIV'
            },
            {
                arabicNumber: 9744,
                result: 'M̅XDCCXLIV'
            },
            {
                arabicNumber: 0,
                result: 'N'
            }
        ];

        testCases.forEach(function (testCase) {
            var arabicNumber = testCase.arabicNumber;
            var result = testCase.result;

            it('when the number ' + arabicNumber + ' is passed it should return ' + result, function () {
                expect(subject.parse(arabicNumber)).toBe(result);
            });
        });
    });
});
