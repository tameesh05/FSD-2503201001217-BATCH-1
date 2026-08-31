const EventEmitter = require("events");

const event = new EventEmitter();

event.on("greet", (name) => {
    console.log(`hello ${name}`);
});

event.on("exit", () => {
    console.log("exits mycustom event emitter..");
});

event.emit("greet", "CSE36");
event.emit("exit");