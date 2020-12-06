const fs = require("fs");

let listarArchivo = async (base, limite = 10) => {
  try {
    let data = "";

    if (isNaN(base)) {
      throw console.error("no es un numero");
    }

    for (let i = 0; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }
    return console.log(data);
  } catch (error) {
    console.error(error);
  }
};

let crearArchivo = async (base, limite = 10) => {
  try {
    let data = "";

    if (isNaN(base)) {
      throw console.error("no es un numero");
    }

    for (let i = 0; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`./multiplicar/tabla-${base}.txt`, data, (err) => {
      if (err) {
        throw err;
      } else {
        console.log("The file has been saved!");
      }
    });

    return `tabla-${base}.txt`;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  crearArchivo,
  listarArchivo,
};
