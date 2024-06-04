"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firstDriver_1 = require("./firstDriver");
var train = new firstDriver_1.firstD.Train(123, 'Express', 100);
train.distanceCover(2);
var driver = new firstDriver_1.firstD.Driver();
driver.drive();
