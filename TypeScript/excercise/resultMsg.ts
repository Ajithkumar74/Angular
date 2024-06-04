import { returnGreetingMsg } from "./welcomemodule";
import { returnGreetings,getMsglength } from "./second/secondwelcomemodule";

const greetingmessage=returnGreetingMsg('welcomemodule');

console.log(greetingmessage);

const greeting=returnGreetings('second welcome module');
console.log(greeting);

const length=getMsglength('welocme welcome module');
console.log(length);
