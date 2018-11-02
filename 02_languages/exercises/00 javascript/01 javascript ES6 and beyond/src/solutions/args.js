// --- EJERCICIO ------------------------------------------------------------------------

// Dada la siguiente función:
function f( a, {b} = {}, c = 100 ) {
  console.log( arguments.length );
  console.log(a, a === arguments[0] );
  console.log(b, b === arguments[1] );
  console.log(c, c === arguments[2] );
};

// A. ¿Qué muestra por consola esta llamada?
f("JS rocks!", {"b": "b"});
// 2
// "JS rocks!", true
// b, false  -> Se almacena correctemente un avariable local primitiva b, pero esta es distinta del objeto original qeu se pasa como parametro
// 100, false -> C obtiene un valor por defecto, y es distinto de undefined.

// B. ¿Y con estos argumentos?
f({"b": "b"});
// 1
// {"b": "b"}, true
// undefined, false  -> Se inicializa un objeto vacio, y no tiene propiedad b, por lo que no se asigna
// 100, false -> Se inicializa con su valor por defecto

// C. ¿Y ahora?
f("JS sucks!", null, 13);
// Error, null al ser un objecto no se inicializa, pero sobre el no se puede hacer destructuring y se produce un error.

