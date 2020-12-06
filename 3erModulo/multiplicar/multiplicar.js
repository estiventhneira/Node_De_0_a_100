const fs = require("fs");

let crearArchivo = async (base) => {
  try {
    let data = "";

    if (isNaN(base)) {
      throw console.error("no es un numero");
    }

    for (let i = 0; i <= 10; i++) {
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
};
