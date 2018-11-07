// --- EJERCICIO ------------------------------------------------------------------------

const a: Array<number> = [1, 2, 3, 4, 5];
const b: Array<string> = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco'];

// HEAD
// Implementa una función head (inmutable), tal que, dado un array como entrada, extraiga su primer
// elemento. Utiliza destructuring
const head = <T>([first]:Array<T>): T => first; // Implementation here.
console.log(head(a));
console.log(head(b));


// TAIL
// Implementa una función tail (inmutable), tal que, dado un array como entrada
// devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = <T>([first, ...rest]: Array<T>) : Array<T> => rest; // Implementation here.
console.log(tail(a));
console.log(tail(b));


// INIT
// Implementa una función init (inmutable), tal que, dado un array como entrada
// devuelva todos los elementos menos el último. Utiliza los métodos que ofrece
// Array.prototype.

const init = <T>(list : Array<T>) : Array<T>=> list.slice(0, -1);
console.log(init(a));
console.log(init(b));


// LAST
// Implementa una función last (inmutable), tal que, dado un array como entrada
// devuelva el último elemento.

const last = <T>(list: Array<T>) : T => list.slice(-1)[0];
console.log(last(a));
console.log(last(b));