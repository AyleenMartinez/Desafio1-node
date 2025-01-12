const {registrar, leer} = require('./operaciones.js');

const argumentos = process.argv.slice(2);

const accionRealizar = argumentos[0];

if(accionRealizar === "registrar"){
    const nombre = argumentos[1];
    const  edad = argumentos[2];
    const  tipo = argumentos[3];
    const  color = argumentos[4];
    const  enfermedad = argumentos[5];
    registrar(nombre, edad, tipo, color, enfermedad);
} else if(accionRealizar === "leer"){
    leer();
}

