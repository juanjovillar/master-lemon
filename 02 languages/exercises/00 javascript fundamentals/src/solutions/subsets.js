// --- EJERCICIO ------------------------------------------------------------------------

// Escribe una función que acepte un string como argumento y devuelva todas las partes finales de dicha palabra:

// Solución:
function subsets(word) {
  // Implementation here
  var res = [];
  var length = word.length - 1;

  for (var i = 0; i < length; i++) {
    res.push(word.substr(i + 1));
  }
  return res;
}

console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]


// Challenge: No utilices arrays auxiliares ni bucles for/do/while.
// TIP: Una forma válida de "iterar" es utilizando algún método de Array

// Solución al Challenge:
function subsetsChallenge(word) {
  return word
    .substr(1)
    .split('')
    .map(function (char, indx) {
      return word.substr(indx + 1);
    });
}

console.log(subsetsChallenge("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]