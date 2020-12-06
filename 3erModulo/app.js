const { crearArchivo } = require("./multiplicar/multiplicar");

let base = process.argv[2];
base = base.split("=")[1];
crearArchivo(base);
