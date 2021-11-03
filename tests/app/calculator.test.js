
const assert = require('assert').strict;
const calculadora = require('../src/app/calculadora');

describe('TDD de Operações da Calculadora', () => {
    it('Teste: Deve Somar 2 Números', () => {
        assert.strictEqual(calculadora.adicionar(5, 5), 10);
    });

    it('Teste: Deve Subtrair 2 Números', () => {
        assert.strictEqual(calculadora.subtrair(10, 5), 5);
    });

    it('Teste: Deve Multiplicar 2 Números', () => {
        assert.strictEqual(calculadora.multiplicar(10, 5), 50);
    });

    it('Teste: Deve dividir 2 Números', () => {
        assert.strictEqual(calculadora.dividir(18, 2), 9);
    });
});

describe('Outros tipos de testes com assertions', () => {
    it('Teste: Deve verificar se um determinado número é maior ou igual', () => {
        assert.ok(6 > 2, "6 é maior do que 26 é maior do que 2");
        assert.ok(7 == 7, "7 'e igual a 7");
    });
});