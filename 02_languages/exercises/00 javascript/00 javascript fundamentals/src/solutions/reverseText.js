// --- CHALLENGE ------------------------------------------------------------------------

// Dado un texto cualquiera, invierte el orden de las palabras.
// TIP: Se hace en 1 sola línea.

// Ejemplo: "Uno dos tres" --> "tres dos Uno"

function reverseText(text) {
  return text.split(" ").reverse().join(" ");
};

console.log(reverseText("Esto es una cadena de texto invertida"));