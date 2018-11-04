// --- EJERCICIO ------------------------------------------------------------------------

// Crea una función zipObject que acepte un array de claves como primer argumento y un array de valores como segundo argumento
// cuyo objetivo sea crear un objeto uniendo las claves con sus valores.
// Asumir que el array de claves tiene como mínimo la misma longitud que el de valores.


// Solución - Iterando con foreach
function zipObject(keys, values) {
    // Implementation here
    var zippedObject = {};
    values.forEach(function(key, indx){
      zippedObject[key] = values[indx];
    }) 
  
    return zippedObject;
  }
  
  
  // Solución - Usando reducer
  function zipObjectReducer(keys, values) {
    // Implementation here
    return keys.reduce(
                function(zippedObject, key, index){
                    if (values[index] !== undefined){            
                        zippedObject[key] = values[index];                        
                    }
                    return zippedObject;                 
                }
                ,{});    
  }
  
  
  
  // Ejemplo
  console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])) // {spanish: "hola", english: "hi", french: "salut"}
  console.log(zipObjectReducer(["spanish", "english", "french"], ["hola", "hi", "salut"])) // {spanish: "hola", english: "hi", french: "salut"}
  
  
  // Challenge: Si no hay valores suficientes para todas las claves evita que aparezcan como undefined
  
  // Ejemplo:
  console.log(zipObject(["spanish", "english", "french"], ["hola"])) // {spanish: "hola"}
  console.log(zipObjectReducer(["spanish", "english", "french"], ["hola"])) // {spanish: "hola"}