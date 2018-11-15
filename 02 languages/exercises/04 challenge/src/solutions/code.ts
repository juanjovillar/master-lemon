import { Alphabet } from "./alphabet";

abstract class Code {
  protected abstract alphabet: Alphabet;
  abstract translateMessage(message: string): string;
  abstract converToPulses(message: string);
}

export { Code };
