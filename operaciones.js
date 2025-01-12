const fs = require('fs');

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const citasAGuardar = [
        {
            "nombre": nombre,
            "edad": edad,
            "animal": tipo,
            "color": color,
            "enfermedad": enfermedad
        }
    ];

    fs.writeFileSync("citas.json", JSON.stringify(citasAGuardar));
};

const leer = () => {
    const contenidoLeido = fs.readFileSync("citas.json", "utf8");
    JSON.parse(contenidoLeido).forEach( cita => {
        console.log(cita);
    });
}

module.exports = {registrar, leer};