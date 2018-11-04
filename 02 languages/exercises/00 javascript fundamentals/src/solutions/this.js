// --- EJERCICIO ------------------------------------------------------------------------

// ¿Qué sale en cada log en consola en el siguiente código?

var surname = "Pérez";
var person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function() {
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname());            // Jimenez  (this apunta al invocador de la función [wife])
var surnameFunction = person.wife.getSurname;     
console.log(surnameFunction());                   // Perez    (this apunta al invocador de la función, [el global window]) 
console.log(surnameFunction.call(person));        // Gonzalez (this apunta al scope especificado como parametro a 'call', [person]) 
