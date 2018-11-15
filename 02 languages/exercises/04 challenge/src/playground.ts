import { MorseCode } from './solutions/morseCode';
import { TransmitterFactory } from "./solutions/transmitterFactory";

const finishCallback = () => {
  console.log('Finisihed transmission!!!')
}

const MorseTransmitter = TransmitterFactory(new MorseCode(), 200, finishCallback);
const transmitter = new MorseTransmitter();

transmitter.transmit("Hello World!"); 
