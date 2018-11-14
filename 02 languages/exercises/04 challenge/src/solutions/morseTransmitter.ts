import { Alphabet, morse } from './alphabet';




const TransmitterFactory = (alphabet: Alphabet) => {

    const waitFactor = 500;

    const decode = (char: string): string => {
        return alphabet[char];
    };

    const delay = async (waitingUnits, callback) => await setTimeout(callback, waitingUnits * this.waitFactor);

    const writePoint = async () => {
        console.log("ON");
        await delay(1, console.log("OFF"))
    }

    const writeLine = async () => {
        console.log("ON");
        await delay(3, console.log("OFF"));
    }

    const writeSymbol = async (symbol) => {
        await symbol === '-'
            ? this.writePoint()
            : this.writeLine()
    };

    const writeChar = async (char: string) => {
        const morseChar = decode(char);
        await morseChar
            .split('')
            .forEach(writeSymbol);

        await delay(() => { }, 1);
    };

    const writeWord = async (word: string) => {
        await word
            .split("")
            .forEach(writeChar);

        await delay(() => { }, 7);
    };

    return class {

        public async writer(message: string) {
            message
                .split(' ')
                .forEach(writeWord);
        }
    }
}

const MorseTransmitter = TransmitterFactory(morse);
const transmitter = new MorseTransmitter();

transmitter.writer("HOLA");




