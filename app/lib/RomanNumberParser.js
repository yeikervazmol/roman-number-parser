'use strict';
const ROMAN_CHAR_FOR_ZERO = 'N';
const BASE_ROMAN_NUMBERS_CASES = {
    '̅X': 10000,
    'M̅X': 9000,
    '̅V': 5000,
    'M̅V': 4000,
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
};

function parse(arabicNumber) {
    var parsedNumber = '';

    if (isEqualToZero(arabicNumber)) {
        return ROMAN_CHAR_FOR_ZERO;
    }

    for (var romanNumber in BASE_ROMAN_NUMBERS_CASES) {
        while (arabicNumber >= BASE_ROMAN_NUMBERS_CASES[romanNumber]) {
            parsedNumber += romanNumber;
            arabicNumber -= BASE_ROMAN_NUMBERS_CASES[romanNumber];
        }

        if (isEqualToZero(arabicNumber)) {
            break;
        }
    }
    return parsedNumber;
}

function isEqualToZero(number) {
    return number === 0;
}

module.exports = {
    parse: parse
};
