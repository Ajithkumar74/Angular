function revfunction(data) {
    var reversed = ' ';
    for (var i = data.length - 1; i >= 0; i--) {
        reversed += data[i];
    }
    return reversed;
}
var actualstring = '"Hello World!"';
var reversestring = revfunction(actualstring);
console.log(reversestring);
