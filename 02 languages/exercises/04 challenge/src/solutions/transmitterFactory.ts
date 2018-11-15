import { Code } from './code'

enum TransmissionStatus {
  Active = "ON",
  Inactive = "OFF"
}

interface TransmissionPulse {
  duration: number;
  transmissionStatus: TransmissionStatus;
}

const TransmitterFactory = (transmissionCode: Code, pulseDuration: number, finishCallback) => {

  const waitPulse = () =>
    new Promise(resolver => setTimeout(resolver, pulseDuration));

  const asyncForEach = async (collection, callback) => {
    for (let index = 0; index < collection.length; index++) {
      await callback(collection[index]);
    }
  };

  const write = async (pulse: TransmissionPulse) => {
    for (let i = 0; i < pulse.duration; i++) {
      pulse.transmissionStatus === TransmissionStatus.Inactive
        ? console.log(TransmissionStatus.Inactive)
        : console.warn(TransmissionStatus.Active);

      await waitPulse();
    }
  };

  return class {
    public async transmit(message: string) {
      console.log(`Original message : [ ${message} ]`)

      const morseMessage: string = transmissionCode.translateMessage(message);     
      console.log(`Translated message : [ ${morseMessage} ]`)
      
      console.log(`Begin transmission!`);
      const pulseCollection : TransmissionPulse[] = transmissionCode.converToPulses(morseMessage);     
      await asyncForEach(pulseCollection, write);

      finishCallback();
    }
  };
};

export { TransmissionPulse, TransmissionStatus, TransmitterFactory };
