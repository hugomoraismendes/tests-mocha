// const assert = require('assert').expect;
// const assert = require('assert').strict;
const assert = require('assert');
const request = require("request");

describe("API de conversao de codigo de cor", function () {

    describe("Conversao de RGB para Hex", function () {

        let url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

        it("Retorna status 200", function () {
            request(url, function (error, response, body) {
                assert.strictEqual(response.statusCode, 200);
            });
        });

        it("Retorna cor em hex", function () {
            request(url, function (error, response, body) {
                assert.strictEqual(body, "ffffff");
            });
        });
    });

    describe("Conversao de Hex para RGB", function () {

        let url = "http://localhost:3000/hexToRgb?hex=00ff00";

        it("Retorna status 200", function () {
            request(url, function (error, response, body) {
                assert.strictEqual(response.statusCode, 200);
            });
        });

        it("Retorna cor em RGB", function () {
            request(url, function (error, response, body) {
                assert.strictEqual(body, "[0,255,0]");
            });
        });
    });

});