// --- EJERCICIO ------------------------------------------------------------------------

// [!] NOTA: Realiza primero el ejercicio "values".

// Dada la calificación de alumnos de una clase en forma de objeto como el siguiente:

const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

// Implementa una función que muestre la media de la clase de forma textual, es decir, siguiendo
// el sistema de calificación español:
// Matrícula de Honor = 10
// Sobresaliente = entre 9 y 10
// Notable = entre 7 y 9
// Bien = entre 6 y 7
// Suficiente = entre 5 y 6
// Insuficiente = entre 4 y 5
// Muy deficiente = por debajo de 4

// TIP: Rompe en tantas funciones auxiliares como necesites.
// TIP: Utiliza el ejercicio "values" para extraer los valores de un objeto.
// En Array.prototype también cuentas con otro método que podría serte de utilidad
// para transformar un array a un único valor.


// Solucion
//--------------------------------------------------------------------------
function values(obj) {
  var propertyList = [];
  for (prop in obj) {
      if (obj.hasOwnProperty(prop)) {
          propertyList.push(obj[prop]);
      }
  }
  return propertyList;
}

function getAverage(marks) {
  return marks
      .reduce(function (total, currentMark) {
          return total + currentMark
      }) / marks.length;
}

function convertToTextAverage(average) {
  switch (true) {
      case average < 4:
          return "Muy deficiente";
      case average < 5:
          return "Insuficiente";
      case average < 6:
          return "Suficiente";
      case average < 7:
          return "Bien";
      case average < 9:
          return "Notable";
      case average < 10:
          return "Sobresaliente";
      case average === 10:
          return "Matricula de Honor";
      default:
          return "Valor no valido";
  }
}

function printAverage(classResults) {
  var resultList = values(classResults);
  var average = getAverage(resultList);  

  console.log(convertToTextAverage(average));
}


//Ejemplo
printAverage(eso2o);

const eso3o = {
  David: 0,
  Maria: 0,
  Jose: 0,
  Juan: 0,
  Blanca: 0,
  Carmen: 0,
};
printAverage(eso3o);


const eso4o = {
  David: 10,
  Maria: 10,
  Jose: 10,
  Juan: 10,
  Blanca: 10,
  Carmen: 10,
};
printAverage(eso4o);