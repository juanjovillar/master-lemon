// 2) CALIFICACIONES
// Utilizando TypeScript escribe una función que reciba una lista de estudiantes (que tienen nombre y una lista de notas)
// y devuelva otra lista donde por cada estudiante devuelva su nombre, su nota más alta y la media de sus notas.
// Crea para ello dos entidades, una para representar al estudiante (Student) y otra para representar su nombre,
// nota más alta y media de notas (StudentSummary).
// No se permite el uso de clases.
// En caso de usar funciones auxiliares típalas.
// Puedes usar la función Number.prototype.toPrecision(3) para reducir el número de decimales de la media de calificaciones
// a tres números.

// MODEL
interface student {
  name: string,
  califications: Array<number>,
}

interface studentSummary {
  name: string,
  highestCalification: number,
  averageCalifications: number,
}

// AUX FUNCTIONS DEFINITIONS
type average  = (element: Array<number>) => number;
type top = (element: Array<number>) =>  number;
type studentSummarizer = (students: student) => studentSummary;
type classSummarizer  = (students: Array<student>) => Array<studentSummary>;

// AUX FUNCTIONS IMPLEMENTATIONS
const getAverageCalification: average = (califications) => {
  const sum = (total, calification) => total = total + calification;
  const average = califications.reduce(sum) / califications.length;

  return parseFloat(average.toPrecision(3));
}

const getTopCalification: top = (califications) => {
  const compare = (highest, calification) => {
      return highest > calification
          ? highest
          : calification;
  }

  return califications.reduce(compare, 0)
}

const summarizeStudent: studentSummarizer = (student) => {
  return {
      name : student.name,
      highestCalification: getTopCalification(student.califications),
      averageCalifications: getAverageCalification(student.califications),
  }
}

// SOLUTION
const summarizeClassRoom: classSummarizer = (studentList) => {
  return studentList.map(summarizeStudent);
};

const students: Array<student> = [
  { name: 'Juan', califications: [1.56, 2.13, 7.53, 9.71, 2.67, 2.43, 2.86, 9.42, 8.08, 7.34] },
  { name: 'Álvaro', califications: [4.49, 1.52, 7.00, 8.30, 8.01, 6.45, 3.72, 3.27, 6.99, 6.01] },
  { name: 'María', califications: [2.99, 7.33, 1.14, 3.26, 0.98, 2.94, 4.99, 4.51, 1.80, 9.30] },
  { name: 'Jorge', califications: [4.60, 3.63, 9.07, 9.03, 3.05, 6.61, 4.81, 1.39, 2.97, 8.69] },
  { name: 'Mónica', califications: [9.72, 6.07, 1.11, 4.72, 0.04, 1.56, 0.66, 3.87, 6.97, 9.48] },
];

console.log(summarizeClassRoom(students));
// [
//   { name: 'Juan', highestCalification: 9.71, averageCalifications: '5.37' },
//   { name: 'Álvaro', highestCalification: 8.3, averageCalifications: '5.58' },
//   { name: 'María', highestCalification: 9.3, averageCalifications: '3.92' },
//   { name: 'Jorge', highestCalification: 9.07, averageCalifications: '5.38' },
//   { name: 'Mónica', highestCalification: 9.72, averageCalifications: '4.42' }
// ]
