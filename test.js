import { EventEmitter } from "events";

const myEmitter = new EventEmitter();

function goodJobHandler() {
  console.log("Good job!");
}

function badJobHandler() {
  console.log("Bad job!");
}

myEmitter.on("goodJob", goodJobHandler);
myEmitter.on("badJob", badJobHandler);

myEmitter.emit("goodJob");
myEmitter.emit("badJob");

myEmitter.emit("goodJob", "Alice");
myEmitter.emit("badJob", "Bob");

myEmitter.on("error", (err) => {
  console.error("An error occurred: ", err);
});

myEmitter.emit("error", new Error("Whoops!"));
