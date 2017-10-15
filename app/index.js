'use strict';
var express = require('express');
var app = express();
var RomanNumberParser = require('./lib/RomanNumberParser.js');

app
    .get('/number/:arabicNumber', function (req, res) {
        var arabicNumber = parseInt(req.params.arabicNumber);
        var romanNumber = RomanNumberParser.parse(arabicNumber);
        return res.send(romanNumber);
    })
    .get('/healthcheck', function (req, res) {
        return res.send({
            status: 'OK'
        });
    });

app.listen(3000);
