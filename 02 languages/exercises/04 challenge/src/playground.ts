interface Alphabet {
    "0": string,
    "1": string,
    "2": string,
    "3": string,
    "4": string,
    "5": string,
    "6": string,
    "7": string,
    "8": string,
    "9": string,
    "a": string,
    "b": string,
    "c": string,
    "d": string,
    "e": string,
    "f": string,
    "g": string,
    "h": string,
    "i": string,
    "j": string,
    "k": string,
    "l": string,
    "m": string,
    "n": string,
    "o": string,
    "p": string,
    "q": string,
    "r": string,
    "s": string,
    "t": string,
    "u": string,
    "v": string,
    "w": string,
    "x": string,
    "y": string,
    "z": string,
    ".": string,
    ",": string,
    "?": string,
    "!": string,
    "-": string,
    "/": string,
    "@": string,
    "(": string,
    ")": string,
};


const morse: Alphabet = {
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
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
}

enum MorseSymbol {
     
}

const TransmitterFactory = (alphabet: Alphabet) => {

    const waitFactor = 200;

    const waitPulses = (pulses) => new Promise((resolver) => setTimeout(resolver, pulses * waitFactor));

    const asyncForEach = async (collection, callback) => {
        for (let index = 0; index < collection.length; index++) {
            await callback(collection[index])
        }
    };

    const decode = (char: string): string => {
        return alphabet[char];
    };

    const writePulse = async (status, times) => {
        for (let index = 0; index < times; index++) {
            status === 'ON'
                ? console.warn(status)
                : console.log(status);

            await waitPulses(1);
        }
    };

    const writePoint = async () => { await writePulse("ON", 1); };
    const writeLine = async () => { await writePulse("ON", 3); };
    const writeSymbolSpacer = async () => { await writePulse("OFF", 1); };
    const writeLetterSpacer = async () => { await writePulse("OFF", 2); };
    const writeWordSpacer = async () => { await writePulse("OFF", 4); };

    const writeSymbol = async (symbol) => {        
        symbol === '.'
            ? await writePoint()
            : await writeLine();

        await writeSymbolSpacer();
    };

    const writeLetter = async (char: string) => {        
        const morseChar = decode(char);
        const symbols = morseChar.split('');
        await asyncForEach(symbols, writeSymbol);

        await writeLetterSpacer();
    };

    const writeWord = async (word: string) => {        
        const letters = word.split('')
        await asyncForEach(letters, writeLetter);

        await writeWordSpacer();
    };

    return class {
        public async writer(message: string) {
            const words = message.split(' ');
            await asyncForEach(words, writeWord);
        }
    }
}

const MorseTransmitter = TransmitterFactory(morse);
const transmitter = new MorseTransmitter();

transmitter.writer("sos");
