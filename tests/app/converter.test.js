const assert = require("assert");
const converter = require("../src/app/converter");

describe("Conversor de codigo de cor", function () {
  describe("Conversor de RGB para Hex", function () {
    it("Converte as cores basicas", function () {
      let redHex = converter.rgbToHex(255, 0, 0);
      let greenHex = converter.rgbToHex(0, 255, 0);
      let blueHex = converter.rgbToHex(0, 0, 255);

      assert.strictEqual(redHex, "ff0000");
      assert.strictEqual(greenHex, "00ff00");
      assert.strictEqual(blueHex, "0000ff");
    });
  });

  describe("Conversor de Hex para RGB", function () {
    it("Converte as cores basicas", function () {
      let red = converter.hexToRgb("ff0000");
      let green = converter.hexToRgb("00ff00");
      let blue = converter.hexToRgb("0000ff");

      assert.deepStrictEqual(red, [255, 0, 0]);
      assert.deepStrictEqual(green, [0, 255, 0]);
      assert.deepStrictEqual(blue, [0, 0, 255]);
    });
  });
});
