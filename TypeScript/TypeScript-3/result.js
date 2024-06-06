"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetingmodule_1 = require("./greetingmodule");
var secondgreetingmodule_1 = require("./secondgreetingmodule");
(0, greetingmodule_1.returnGreeting)("Hello from the first module!");
(0, secondgreetingmodule_1.returnGreeting)("Hello from the second module!");
var greeting = "Hello from the second module!";
console.log("The length of the greeting is: ".concat((0, secondgreetingmodule_1.getLength)(greeting)));
