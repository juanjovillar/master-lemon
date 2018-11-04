// --- EJERCICIO ------------------------------------------------------------------------

// Implementa una función para calcular el n-enésimo termino de la sucesión de
// Fibonacci. Esta sucesión tiene sus dos primeros términos prefijados:
//
// fib(0) = 0
// fib(1) = 1
//
// Y a partir de aqui, el siguiente términose calcula a partir de los dos anteriores:
//
// fib(2) = fib(1) + fib(0)
// ...
// fib(n + 1) = fib(n) + fib(n - 1)
//
// TIP: Es el clásico problema donde el término siguiente depende del actual
// y el anterior.
// TIP: También se puede abordar con recursividad, pero buscamos una solución
// iterativa para hacer uso de destructuring con múltiples asignaciones.

const fibonacci = (n) => {
  if (n <= 1) {
      return n;
  }
  
  let total = 1,
      last = 0;

  for (let index = 1; index < n; index++) {
      console.log(last);
      [total, last] = [total + last, total];
  }

  return total;

}
console.log(fibonacci(7));
