// --- EJERCICIO ------------------------------------------------------------------------

// Crea una función que reciba una frase en formato string y devuelva la palabra más larga.
// En caso de haber varias con longitud máxima que devuelva siempre la primera.



// Solución
//--------------------------------------------------------------------------
function biggestWord(phrase) {
  // Implementation here  
  var longestWord = phrase
                      .split(" ")
                      .reduce(function(candidateWord, currentWord){
                        return candidateWord.length < currentWord.length ? currentWord : candidateWord;
                      0, ""});

  return longestWord;
}



// Ejemplo
console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "JavaScript"
