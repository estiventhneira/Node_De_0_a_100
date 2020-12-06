let empleados = [
  {
    id: 1,
    nombre: "estiventh",
  },
  {
    id: 2,
    nombre: "Mercedes",
  },
  {
    id: 3,
    nombre: "Wade",
  },
];

let salarios = [
  {
    id: 1,
    salario: 2000,
  },
  {
    id: 2,
    salario: 3000,
  },
];

let getSalario = (NumeroEmpleado, callback) => {
  const empleadoExiste = () => {
    return empleados.find((element) => element.id === NumeroEmpleado);
  };

  if (!empleadoExiste()) {
    return callback("el empleado no existe", null);
  } else {
    return callback(null, empleadoExiste());
  }
};

let juntarSalario = (e) => {
  const empleado = salarios.find((element) => element.id === e.id);
  if (empleado) {
    return empleado.salario;
  } else {
    return undefined;
  }
};

getSalario(1, (err, sucess) => {
  if (err) {
    console.log(err);
  } else {
    console.log(
      `el empleado ${sucess.nombre} tiene un salario de`,
      juntarSalario(sucess)
    );
  }
});
