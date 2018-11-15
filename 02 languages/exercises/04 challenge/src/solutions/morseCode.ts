import { Alphabet } from "./alphabet";
import { Code } from "./code";
import { TransmissionPulse, TransmissionStatus } from "./transmitterFactory";

enum MorseSymbol {
  POINT = ".",
  LINE = "-",
  SPACER = "_"
}

class MorseCode extends Code {
  protected alphabet: Alphabet = {
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  };

  translate = (char: string): string => {
    return this.alphabet[char.toLowerCase()];
  };

  translateLetter = (letter: string): string => {
    return this.translate(letter)
      .split("")
      .join(MorseSymbol.SPACER);
  };

  translateWord = (word: string): string => {
    return word
      .split("")
      .map(this.translateLetter)
      .join(MorseSymbol.SPACER.repeat(3));
  };

  morseToPulseMapper = (morseSymbol: MorseSymbol): TransmissionPulse => {
    switch (morseSymbol) {
      case MorseSymbol.POINT:
        return { duration: 1, transmissionStatus: TransmissionStatus.Active };
      case MorseSymbol.LINE:
        return { duration: 3, transmissionStatus: TransmissionStatus.Active };
      default:
        return { duration: 1, transmissionStatus: TransmissionStatus.Inactive };
    }
  };

  public converToPulses(morseMessage: string): TransmissionPulse[] {
    return morseMessage.split("").map(this.morseToPulseMapper);
  }

  public translateMessage(message: string): string {
    return message
      .split(" ")
      .map(this.translateWord)
      .join(MorseSymbol.SPACER.repeat(3))
      .concat(MorseSymbol.SPACER.repeat(7));
  }
}

export { MorseSymbol, MorseCode };
