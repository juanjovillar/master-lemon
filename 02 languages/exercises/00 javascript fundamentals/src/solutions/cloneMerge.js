// --- EJERCICIO ------------------------------------------------------------------------

// A. Implementa una función clone que devuelva un objeto clonado a partir de otro:
function clone(source) {
  // Implementation here.
  var clonedObj = {};
  for (var key in source){    
      clonedObj[key] = source[key];    
  }

  return clonedObj;
} 

// B. Dados dos objetos cualesquiera, implementa una función "merge" que mezcle uno sobre otro.
// El objeto resultante debe ser la mezcla de las propiedades del objeto "source" sobre las
// del objeto "target". TIP: Usa la función "clone" del apartado A.

function merge(source, target) {
  // Implementation here.
  var mergedObj = clone(source);  
  for (prop in target){
    if (mergedObj[prop] === undefined){
      mergedObj[prop] = target[prop]
    }
  }

  console.log(mergedObj);
}

// Por ejemplo, dados estos 2 objetos:
var a = {name: "Maria", surname: "Ibañez", country: "SPA"};
var b = {name: "Luisa", age: 31, married: true};
// El resultado de mezclar a sobre b sería:
merge(a, b) // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
