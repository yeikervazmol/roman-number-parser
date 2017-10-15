'use strict';
var express = require('express');
var app = express();
var RomanNumberParser = require('./lib/RomanNumberParser.js');
const MAX_NUMBER_ALLOWED = 10000;

app
    .get('/healthcheck', function (req, res) {
        return res.send({
            status: 'OK'
        });
    })
    .get('/number/:arabicNumber(\[0-9]+)', function (req, res) {
        var arabicNumber = parseInt(req.params.arabicNumber);
        if (arabicNumber > MAX_NUMBER_ALLOWED) {
            return res.sendStatus(400)
        }
        var romanNumber = RomanNumberParser.parse(arabicNumber);
        return res.send(romanNumber);
    });

app.listen(3000);
