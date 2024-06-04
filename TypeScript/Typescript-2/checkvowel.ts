const checkVowel=(data:string):boolean=>{
    const char=data.toLocaleLowerCase();


    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';

};

const test1=checkVowel("A");
const test2 = checkVowel("b"); 
const test3 = checkVowel("E"); 

console.log(test1); 
console.log(test2); 
console.log(test3); 