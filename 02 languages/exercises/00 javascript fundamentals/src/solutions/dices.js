// --- EJERCICIO ------------------------------------------------------------------------

// Empleando el concepto de closure, emula el comportamiento de 2 dados.
// Utiliza un closure para almacenar el resultado de tirar 2 dados, y encapsula
// junto a estos datos métodos que implementen la funcionalidad de:
// - Hacer reset: poner a undefined o null ambos resultados.
// - Tirar los dados. TIP: Usa Math.random() para tiradas aleatorias.
// - Imprimir el resultado por consola. Ten en cuenta lo siguiente:
//   - Informa al usuario que debe tirar primero cuando corresponda.
//   - Si saca doble 6, ¡dale un premio!


//Solucion - Generalizada para 'n' dados
function Dice(){
    this.value = null;    

    this.reset = function(){
        this.value = null;
    };

    this.roll = function(){
        this.value = Math.floor(Math.random() * 6) + 1;  
    };
};

var CreateDiceGame = function(numDices){
    var dices = [];       

    var initGame = function(){
        for (var index = 0; index < numDices; index++) {
            dices.push(new Dice());
        }
    };

    var showRollResult = function(){
        var rollResult = dices.map(function(dice){
            return dice.value
        })
        .join(" ");

        console.log("La tirada ha sido de: [" + rollResult + "]");
    };

    var checkPrize = function(){
        return dices.every(function(dice){
            return dice.value === 6;
        });
    };

    var resetDices = function(){
        dices.forEach(function(dice){
            dice.reset();
        });

        console.log("Has guardados los dados en el cubilete");                  
    };

    var rollDices = function(){
        dices.forEach(function(dice){
            dice.roll();            
        }); 
        console.log("Has hecho una tirada!");          
    };

    var cheatRoll = function(){
        dices.forEach(function(dice){
            dice.value = 6;
        }); 
        console.log("Has hecho una tirada 'especial'");          
    };

    var logDicesValues = function(){
        var shouldThrowDices = dices.some(function(dice){            
            return dice.value === null;
        })

        if (shouldThrowDices){
            console.log("Debes lanzar primero los dados");
        }
        else{            
            showRollResult();            
            if (checkPrize()){
                console.log("HAS GANADO UN PREMIO!!!");
            }      
        }
    };

    initGame();

    return {
        resetDices: resetDices,
        rollDices: rollDices,
        cheatRoll :cheatRoll,
        logDicesValues: logDicesValues
    };
};


var diceGame = CreateDiceGame(2);
diceGame.logDicesValues();

diceGame.rollDices();
diceGame.logDicesValues();

diceGame.resetDices();
diceGame.logDicesValues();

diceGame.cheatRoll();
diceGame.logDicesValues();