// --- EJERCICIO ------------------------------------------------------------------------

// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos
// insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá
// incrementando conforme vayamos jugando.

// Cuando se llame al método play el número de monedas debe incrementar de forma automática y debe generar tres
// booleanos aleatorios. En caso de que los tres booleanos sean true debe un mensaje por consola:
//      "Congratulations!!!. You won <número de monedas> coins!!" 
// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina.
// En caso contrario deberá mostrar otro mensaje: 
//      "Good luck next time!!"

interface Reel{
    hasPrize: boolean;
}

class SlothMachine {
    constructor(
        public coins: number = 0, 
        private reels: Array<Reel> = []){                
    }
    
    private rollReel(): boolean {
        return Math.random() >= 0.5;
    }
  
    private rollAll(): Array<Reel> {
        return new Array(3).fill({ hasPrize: this.rollReel() });        
    }
  
    play(): void {
      this.coins++;
      this.reels = this.rollAll();
      console.log(this.reels);
  
      if (this.reels.every(reel => reel.hasPrize === true)){
          console.log(`"Congratulations!!!. You won ${this.coins} coins!!"`);
          this.coins = 0;
      }
      else{
        console.log("Good luck next time!!");        
      }  
    }   
  }
  
  const machine1 = new SlothMachine();
  machine1.play(); 
  while (machine1.coins > 0){
    machine1.play();
  };