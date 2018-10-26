// --- EJERCICIO ------------------------------------------------------------------------


// A. ¿Cual crees que será el resultado de la consola y porqué? TIP: escribe el código equivalente.
// -----------------------------------------------------------------------------------
function f() {
  console.log(a);         // Undefined
  console.log(g());       // Undefined

  var a = "good job!";
  function g() {
    return a;
  }
  console.log(a);         //"good job!"
}
f();


//A. Codigo Equivalente
function f() {
  var a;
  function g() {
    return a;
  }

  console.log(a);         // Undefined
  console.log(g());       // Undefined  
  a = "good job!";  
  console.log(a);         //"good job!"
}
f();


// B. ¿Y ahora?
// -----------------------------------------------------------------------------------
var a = 1;

(function() {
  console.log(a);         //Undefined
  var a = 2;
  b = 4;
  var c = 3;
})();

console.log(a);            // 1
console.log(b);            // 4
console.log(c);            // Error!  

//B. Codigo equivalente
var a;
(function() {
  console.log(a);         //Undefined
  var a = 2;
  b = 4;
  var c = 3;
})();

a = 1;
console.log(a);            // 1
console.log(b);            // 4
console.log(c);            // Error!  


// C. ¿Y con esta ligera variación?
// -----------------------------------------------------------------------------------
f();
var a = 1;

function f() {
  console.log(a);    // Undefined
  b = 4;
  var c = 3;
};

console.log(a);     // 1
console.log(b);     // 4
console.log(c);     // Error

//C. Codigo equivalente
var a;
function f() {
  console.log(a);    // Undefined
  b = 4;
  var c = 3;
};

f();
a=1;

console.log(a);     // 1
console.log(b);     // 4
console.log(c);     // Error
