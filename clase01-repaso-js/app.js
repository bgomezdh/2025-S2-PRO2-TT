/* tipos de datos */

let nombre = "brian";

let edad = 31;

let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2022,
    numeroPatente: 1323421,
    color: "rosa",
    acelerar: function(velocidad) {
       /*  return "El auto " + this.marca + " del año " + this.annio + " va a " + velocidad + "km/h."; */
       return `El auto ${this.marca} del año ${this.annio} va a ${velocidad + 200}km/h`;

    }
};

console.log(auto.acelerar(200));

/* arrays */


let paises = [ "Argentina", "USA" , "Francia", "Venezuela"];

console.log(paises.pop());

console.log(paises.push("Colombia"));


console.log(paises);



