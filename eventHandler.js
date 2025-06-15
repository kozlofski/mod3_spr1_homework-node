import { EventEmitter } from "events";

export const hashEventEmitter = new EventEmitter();

function hashGeneratedHandler() {
  console.log("Emitter: Hash was generated");
}

hashEventEmitter.on("hashGenerated", hashGeneratedHandler);
