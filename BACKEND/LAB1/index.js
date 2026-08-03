import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();
myEmitter.on("greet", ()=> {
    console.log("class started");
});
myEmitter.on("exit", ()=> {
    console.log("class finished");
});
myEmitter.emit("greet");
myEmitter.emit("exit");