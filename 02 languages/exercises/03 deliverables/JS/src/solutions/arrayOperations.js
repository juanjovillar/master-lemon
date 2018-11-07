// --- EJERCICIO ------------------------------------------------------------------------

const list = [1, 2, 3, 4, 5];


// HEAD
// Implementa una función head (inmutable), tal que, dado un array como entrada, extraiga su primer
// elemento. Utiliza destructuring

const head = ([first]) => first; // Implementation here.
console.log(head(list));


// TAIL
// Implementa una función tail (inmutable), tal que, dado un array como entrada
// devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ([first, ...rest]) => rest; // Implementation here.
console.log(tail(list));


// INIT
// Implementa una función init (inmutable), tal que, dado un array como entrada
// devuelva todos los elementos menos el último. Utiliza los métodos que ofrece
// Array.prototype.

const init = (list) => list.slice(0, -1);
console.log(init(list));


// LAST
// Implementa una función last (inmutable), tal que, dado un array como entrada
// devuelva el último elemento.

const last = (list) => list.slice(-1);
console.log(last(list));