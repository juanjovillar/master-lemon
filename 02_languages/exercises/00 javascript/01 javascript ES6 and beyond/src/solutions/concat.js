// --- EJERCICIO ------------------------------------------------------------------------

// A. Implementa una función concat, tal que, dados 2 arrays como entrada, devuelva la
// concatenación de ambos. Utiliza rest / spread.
// TIP: Se hace en 1 línea. No utilices el método Array.prototype.concat().
const concat = (a, b) => [...a, ...b]; // Implementation here.


// B. Repite el ejercicio anterior suponiendo cualesquiera arrays de entrada (no te limites
// solamente a 2).
const concatMulti = (...arrays) => arrays.reduce((resultArray, currentArray) => {
    return resultArray = [...resultArray, ...currentArray]
  }, [])  



const a = [1,2];
const b = [3,4];
const c = [5,6];
const d = [7,8];

console.log(concat(a,b));
console.log(concatMulti(a,b,c,d));