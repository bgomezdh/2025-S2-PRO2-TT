/* Modulos nativos */
const fs = require('node:fs'); // modulo para manipular carpetas y archivos

const os = require('node:os'); // modulo para ver info de mi sitema operativo

console.log(os.version());

/* Modulos de terceros */
const moment = require("moment");

let fecha = moment().format("MMM Do YY");

console.log(fecha);

/* popular movie quotes */
const pmq = require('popular-movie-quotes');

console.log(pmq.getRandomQuote());

/* modulos propios */
const calculadora = require('./calculadora/calculadora');

let resultado = calculadora.multi(23, 34);

console.log(resultado);





