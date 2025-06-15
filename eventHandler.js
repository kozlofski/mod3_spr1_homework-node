// import events from 'events'
import { EventEmitter } from "events";

export const hashEventEmitter = new EventEmitter();

function hashGeneratedHandler() {
  console.log("Hash was generated");
}

hashEventEmitter.on("hashGenerated", hashGeneratedHandler);

hashEventEmitter.emit("hashGenerated");
