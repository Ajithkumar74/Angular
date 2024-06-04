function revfunction(data: String){
    let reversed=' ';
    for (let i = data.length-1; i >= 0; i--) {
           reversed+=data[i];
    }
    return reversed;
}

const actualstring='"Hello World!"';
const reversestring=revfunction(actualstring);
console.log(reversestring);