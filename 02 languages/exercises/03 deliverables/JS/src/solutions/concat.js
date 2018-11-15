// --- EJERCICIO ------------------------------------------------------------------------

const a = [1, 2, 3, 4, 5];
const b = ['Uno', 'Dos', 'Tres', 'Cuatro'];
const c = [5, 6];

// CONCAT
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
// devuelva la concatenación de ambos. Utiliza rest / spread operators.

const concat = (firstArray, secondArray) => [...firstArray, ...secondArray];
console.log(concat(a, b));


// OPCIONAL 
// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de
// entrada (más de 2).

const concatAll = (...arrayList) => arrayList.reduce((resultArray, currentArray) => {
    return resultArray = [...resultArray, ...currentArray]
}, []);

console.log(concatAll(a, b, c));