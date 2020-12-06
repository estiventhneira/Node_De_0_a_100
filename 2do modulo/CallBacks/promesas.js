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

let getEmpleado = (NumeroEmpleado) => {
  return new Promise((resolve, reject) => {
    const empleadoExiste = () => {
      return empleados.find((element) => element.id === NumeroEmpleado);
    };

    if (!empleadoExiste()) {
      reject("el empleado no existe", null);
    } else {
      resolve(empleadoExiste());
    }
  });
};

let getSalario = (data) => {
  return new Promise((resolve, reject) => {
    const empleado = salarios.find((element) => element.id === data.id);
    if (empleado) {
      resolve(`el salario de ${data.nombre} es de ${empleado.salario} `);
    } else {
      reject(console.error("no existe"));
    }
  });
};

getEmpleado(3)
  .then((response) => getSalario(response))
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.error(err));
