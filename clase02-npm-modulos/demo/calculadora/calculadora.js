const calculadora = {
    suma: function(valor1, valor2) {
        return valor1 + valor2;
    },
    restar: function(valor1, valor2) {
        return valor1 - valor2;
    },
    multi: function(valor1, valor2) {
        return valor1 * valor2;
    },
    div: function(valor1, valor2) {
        return valor1 / valor2;
    }
};

module.exports = calculadora;