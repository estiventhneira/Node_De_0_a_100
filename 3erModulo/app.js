const { crearArchivo, listarArchivo } = require("./multiplicar/multiplicar");
const argv = require("yargs")
  .command("listar", "Imprime en consola el resultado", {
    base: {
      demand: true,
      alias: "b",
    },
    limite: {
      alias: "l",
      default: 10,
    },
  })
  .command("crear", "crea el resultado", {
    base: {
      demand: true,
      alias: "b",
    },
    limite: {
      alias: "l",
      default: 10,
    },
  })
  .help().argv;

let base = process.argv[2];
base = base.split("=")[1];

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarArchivo(argv.base, argv.limite);
    break;
  case "crear":
    crearArchivo(argv.base, argv.limite);
    break;

  default:
    console.log("comando no reconocido");
    break;
}
