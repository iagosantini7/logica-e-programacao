const { somarDoisNumeros } = require('../src/calculadora.js');
const { expect } = require ('chai');

describe('Testes de função de soma', () => {
    it('A Função dve ser capaz de somar dois números positivos', () => {
        // Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros (5, 3);
        // Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(8);
        
    });
    it('A Função dve ser capaz de somar um número positivo e um negativo', () => {
        // Coleta o resultado da função
        const resultadoDaSoma = somarDoisNumeros(50,-15);
        // Compara o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(35);
    });
});
