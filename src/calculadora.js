function somarDoisNumeros(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDeDoisValore(valor1, valor2){
    //Soma todos os valores
    const resultadoDaSoma = somarDoisNumeros(valor1, valor2);
    //Divide pela quantidade de valores
    const media = resultadoDaSoma / 2;
    //Retornar o resultado
    return media;
}
module.exports = { 
    somarDoisNumeros, calcularMediaDeDoisValore 
};