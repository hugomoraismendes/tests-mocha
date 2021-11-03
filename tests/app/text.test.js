// const assert = require('chai').assert;
const assert = require('assert')
const texto = require('../src/app/texto');

describe('Diferentes Tipos de Testes com Mocha:', () => {
    it('Teste: Deve retornar a frase: "Teste de Mocha é bem legal"', () => {
        assert.strictEqual(texto(), 'Teste de Mocha é bem legal');
    });
});