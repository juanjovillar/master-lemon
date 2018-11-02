// --- EJERCICIO ------------------------------------------------------------------------

// El siguiente código implementa una sencilla clase que actúa como reminder,
// es decir, dado un mensaje, lo muestra por consola transcurrido (al menos)
// el tiempo indicado por el usuario.

class Reminder {
  constructor(text) {
    this.text = text;
  }

  remindMe(delay) {
    setTimeout(function() {
      console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
    }, delay * 1000);
  }
}

// Te animamos a que crees una nueva instancia de reminder y la utilices.
// Escribe el mensaje que tu quieras y añade unos pocos segundos de retardo.
// Comprueba la salida por consola .. algo no funciona como esperábamos ¿verdad?
// ¿Sabrías decirnos que está pasando aquí? ¿Cómo lo arreglarías?  

var rem = new Reminder("Hola");
rem.remindMe(2);  



// SOLUCION
//----------------------------------------------------------------------------------------------------
// --> Your reminder after 2 seconds is: undefined
// Esto se produce setTimeout está llamando a su función de callback sin especificar un scope concreto. SetTimeout está definido en el objeto global, 
// y por tanto cualquier referencia a this en el en cualquiera de sus funciones anidadas es el scope global.
// para solucionarlo podriamos o bian fijar el contexto de la funcion ocn [bind] o [call], o mejor aún utilizar una arrow function

class ReminderBind {
  constructor(text) {
    this.text = text;
  }

  remindMe(delay) {
    setTimeout(function(){
      console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
    }.bind(this), delay * 1000);
  }
}


var remBind = new ReminderBind("Hola con Bind");
remBind.remindMe(2);  

class ReminderArrow {
  constructor(text) {
    this.text = text;
  }

  remindMe(delay) {
    setTimeout(() =>{
      console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
    }, delay * 1000);
  }
}

var remArrow = new ReminderBind("Hola con Arrow");
remArrow.remindMe(3);  