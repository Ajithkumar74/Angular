var checkVowel = function (data) {
    var char = data.toLocaleLowerCase();
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
};
var test1 = checkVowel("A"); //true
var test2 = checkVowel("b"); // false
var test3 = checkVowel("E"); // true
// Print the results
console.log(test1); // Output: true
console.log(test2); // Output: false
console.log(test3); // Output: true
