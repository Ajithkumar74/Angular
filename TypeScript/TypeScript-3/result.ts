import { returnGreeting as returnGreetingFromFirstModule} from "./greetingmodule";
import { returnGreeting as returnGreetingFromSecondModule, getLength  } from "./secondgreetingmodule";

returnGreetingFromFirstModule("Hello from the first module!");

returnGreetingFromSecondModule("Hello from the second module!");

const greeting = "Hello from the second module!";

console.log(`The length of the greeting is: ${getLength(greeting)}`);
