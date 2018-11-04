// --- EJERCICIO ------------------------------------------------------------------------

// Descifra el siguiente secreto:
var secret = "sq esqct rts moh egf sql lgsxeogftl tl dqlztkstdgfegrtpqcqlekohzyxfrqdtfzqsl";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz";
var cipher = "qwertyuiopasdfghjklzxcvbnm";


function decypherChar(char) {
  if (char !== " ") {
    char = plain[cipher.indexOf(char)];
  }
  return char;
}

function decypherSecret(secret) {
  return secret
    .split('')
    .map(decypherChar)
    .join('');
}

console.log(decypherSecret(secret));