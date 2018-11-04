// --- EJERCICIO ------------------------------------------------------------------------

// Crear una función que reciba un array y un valor y devuelva un booleano indicando si el valor está dentro del array

// Solucion
//--------------------------------------------------------------------------
function includes(haystack, needle) {
  return haystack.indexOf(needle) > -1;
}

// Ejemplo:
console.log(includes([1, 2, 3], 3)) // true
console.log(includes([1, 2, 3], 0)) // false
